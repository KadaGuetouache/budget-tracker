"use client"

import { useState } from 'react';
import { DateRangePicker } from '@/components/ui/date-range-picker';
import { MAX_DATE_RANGE_DAYS } from '@/constants/constants';
import { toast as sonner } from 'sonner';
import { differenceInDays, startOfMonth } from 'date-fns';
import TransactionTable from './_components/TransactionTable';

const TransactionPage = () => {
  const [dateRange, setDateRange] = useState<{ from: Date, to: Date }>({
    from: startOfMonth(new Date()),
    to: new Date()
  })

  return (
    <>
      <div className="border-b bg-card">
        <div className="container flex flex-wrap items-center justify-between gap-6 py-8">
          <div>
            <p className="text-3xl font-bold">Transaction history</p>
          </div>
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
      <div className="container">
        <TransactionTable from={dateRange.from} to={dateRange.to} />
      </div>
    </>
  )
}

export default TransactionPage
