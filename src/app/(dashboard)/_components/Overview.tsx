'use client'

import { DateRangePicker } from '@/components/ui/date-range-picker'
import { MAX_DATE_RANGE_DAYS } from '@/constants/constants'
import { UserSettings } from '@prisma/client'
import { differenceInDays, startOfMonth } from 'date-fns'
import { useState } from 'react'
import { toast as sonner } from 'sonner'
import StatsCards from './StatsCards'
import CategoriesStats from "./CategoriesStats"

const Overview = ({ userSettings }: { userSettings: UserSettings | null }) => {
  const [dateRange, setDateRange] = useState<{ from: Date, to: Date }>({
    from: startOfMonth(new Date()),
    to: new Date()
  })

  return (
    <>
      <div className="container flex flex-wrap items-center justify-between gap-2 py-6">
        <h2 className="text-3xl font-bold">Overview</h2>
        <div className="flex items-center gap-3">
          <DateRangePicker
            initialDateFrom={dateRange.from}
            initialDateTo={dateRange.to}
            showCompare={false}
            onUpdate={(value) => {
              const { from, to } = value.range;
              // We update he date range only if both dates are set
              //
              if (!from || !to) return;

              if (differenceInDays(to, from) > MAX_DATE_RANGE_DAYS) {
                sonner.error(`the selected date range is to big. Max allowed range is ${MAX_DATE_RANGE_DAYS} days`)
                return;
              }

              setDateRange({ from, to })
            }}
          />
        </div>
      </div>
      <div className="container flex full-w flex-col gap-2">
        <StatsCards userSettings={userSettings} from={dateRange.from} to={dateRange.to} />
        <CategoriesStats userSettings={userSettings} from={dateRange.from} to={dateRange.to} />
      </div>
    </>
  )
}

export default Overview
