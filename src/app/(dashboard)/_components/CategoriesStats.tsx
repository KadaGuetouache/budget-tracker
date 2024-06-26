"use client"

import { UserSettings } from '@prisma/client'
import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { DateToUTCDate, GetFormatterForCurrency } from '@/lib/helpers'
import SkeletonWrapper from '@/components/SkeletonWrapper'
import { GetCategoriesStatsResponseType } from '@/app/api/stats/categories/route'
import { TransactionType } from '@/lib/types'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import CategoriesStatsSingleItem from './CategoriesStatsSingleItem'

interface Props {
  userSettings: UserSettings | null,
  from: Date,
  to: Date
}

const CategoriesStats = ({ userSettings, from, to }: Props) => {
  const statsQuery = useQuery<GetCategoriesStatsResponseType>({
    queryKey: ["overview", "stats", "categories", from, to],
    queryFn: () => fetch(`/api/stats/categories?from=${DateToUTCDate(from)}&to=${DateToUTCDate(to)}`).then((res) => res.json())
  })

  const formatter = useMemo(() => {
    return GetFormatterForCurrency(userSettings?.currency)
  }, [userSettings?.currency])

  return (
    <div className="flex w-full flex-wrap gap-2 md:flex-nowrap">
      <SkeletonWrapper isLoading={statsQuery.isFetching}>
        <CategoriesCard
          formatter={formatter}
          type="income"
          data={statsQuery.data || []}
        />
      </SkeletonWrapper>
      <SkeletonWrapper isLoading={statsQuery.isFetching}>
        <CategoriesCard
          formatter={formatter}
          type="expense"
          data={statsQuery.data || []}
        />
      </SkeletonWrapper>
    </div>
  )
}

export default CategoriesStats

function CategoriesCard({ data, type, formatter }: {
  type: TransactionType,
  formatter: Intl.NumberFormat,
  data: GetCategoriesStatsResponseType
}) {
  const filteredData = data.filter((el: any) => el.type === type)
  const total = filteredData.reduce((acc: any, el: any) => acc + (el._sum?.amount || 0), 0)

  return (
    <Card className="h-80 w-full col-span-6">
      <CardHeader>
        <CardTitle className="grid grid-flow-row justify-center gap-2 text-muted-foreground md:grid-flow-col">{type === "income" ? "Incomes" : "Expeses"} by category</CardTitle>
      </CardHeader>
      <div className="flex items-center justify-center gap-2">
        {filteredData.length === 0 && (
          <div className="flex h-60 w-full flex-col items-center justify-center">
            No data for the selected period
            <p className="text-sm text-muted-foreground">
              Try selecting a different period or try adding new {" "}{type === "income" ? "incomes" : "expenses"}
            </p>
          </div>
        )}
        {filteredData.length > 0 && (
          <ScrollArea className="h-60 w-full px-4">
            <div className="flex w-full flex-col gap-4 p-4">
              {filteredData.map((item: any) => (
                <CategoriesStatsSingleItem type={type} key={item.category} item={item} total={total} formatter={formatter} />
              ))}
            </div>
          </ScrollArea>
        )}
      </div>
    </Card>
  )
}
