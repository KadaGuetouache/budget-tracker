'use client'

import { useEffect, useState } from 'react'
import { Progress } from '@/components/ui/progress'

interface Props {
  item: any;
  total: number;
  formatter: Intl.NumberFormat;
  type: string;
}

const CategoriesStatsSingleItem = ({ item, total, formatter, type }: Props) => {
  // const amount = item._sum.amount || 0
  const [amount, setAmount] = useState(0)
  const percentage = (amount * 100) / (total || amount)

  useEffect(() => {
    const timer = setTimeout(() => setAmount(item._sum.amount || 0), 200)
    return () => clearTimeout(timer)

  }, [item._sum.amount])

  return (
    <div key={item.category} className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="flex items-center text-gray-400">
          {item.categoryIcon} {item.category}
          <span className="ml-2 text-xs text-muted-foreground">
            ({percentage.toFixed(0)}%)
          </span>
        </span>
        <span className="text-sm text-gray-400">{formatter.format(amount)}</span>
      </div>
      <Progress
        value={percentage} indicator={type === "income" ? "bg-emerald-500" : "bg-red-500"} />
    </div>
  )
}

export default CategoriesStatsSingleItem
