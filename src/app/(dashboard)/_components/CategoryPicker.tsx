import { TransactionType } from '@/lib/types'
import { useQuery } from '@tanstack/react-query'
import { useCallback, useEffect, useState } from 'react'
import { Category } from '@prisma/client'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import CreateCategoryDialog from './CreateCategoryDialog'
import { cn } from '@/lib/utils'
import { CheckIcon } from "@/constants/icons"
import { ChevronUpDownIcon } from '@/constants/icons'

interface Props {
  type: TransactionType
  onChange: (value: string) => void
}

const CategoryPicker = ({ type, onChange }: Props) => {
  const [open, setOpen] = useState<boolean>(false)
  const [value, setValue] = useState("")

  useEffect(() => {
    if (!value) return;

    onChange(value)
  }, [onChange, value])

  const categoriesQuery = useQuery<Category[]>({
    queryKey: ["categories", type],
    queryFn: () => fetch(`/api/categories?type=${type}`).then((res) => res.json())
  })

  const selectedCategory = categoriesQuery?.data?.find(
    (category: Category) => category.name === value
  )

  const successCallback = useCallback((category: Category) => {
    setValue(category.name)
    setOpen((prev) => !prev)
  }, [setValue, setOpen])

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className="w-[200px] justify-between">
          {selectedCategory ? <CategoryRow category={selectedCategory} /> : ("Select category")}
          <ChevronUpDownIcon className="opacity-50 w-5 h-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200x] p-0">
        <Command onSubmit={(e) => e.preventDefault()}>
          <CommandInput placeholder="Search category ..." />
          <CreateCategoryDialog type={type} successCallback={successCallback} />
          <CommandEmpty>
            <p>Category not found</p>
            <p className="text-xs text-muted-foreground">Tip: create a category</p>
          </CommandEmpty>
          <CommandGroup>
            <CommandList>
              {categoriesQuery.data && categoriesQuery?.data?.map((category: Category) => (
                <CommandItem key={category.name}
                  onSelect={() => {
                    setValue(category.name)
                    setOpen(prev => !prev)
                  }}
                >
                  <CategoryRow category={category} />
                  <CheckIcon className={cn("mr-2 w-4 h-4 cursor-pointer opacity-0", value === category.name && "opacity-100")} />
                </CommandItem>
              ))}
            </CommandList>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

function CategoryRow({ category }: { category: Category }) {
  return (
    <div className="flex items-center gap-2 w-full cursor-pointer">
      <span role="img">{category.icon}</span>
      <span>{category.name}</span>
    </div>
  )
}

export default CategoryPicker
