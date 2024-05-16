import { Button } from '@/components/ui/button'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { TransactionType } from '@/lib/types'
import { CreateCategorySchema, CreateCategorySchemaType } from '@/schema/categories'
import { zodResolver } from '@hookform/resolvers/zod'
import { CircleOffIcon, PlusSquareIcon } from 'lucide-react'
import { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import { cn } from '@/lib/utils'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import Picker from "@emoji-mart/react"
import data from "@emoji-mart/data"
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { CreateCategory } from '../_actions/categories'
import { toast as sonner } from 'sonner'
import { Category } from '@prisma/client'
import { SpinnerIcon } from '@/constants/icons'
import { useTheme } from 'next-themes'

interface Props {
  type: TransactionType,
  successCallback: (category: Category) => void,
  trigger?: ReactNode
}

const CreateCategoryDialog = ({ type, successCallback, trigger }: Props) => {
  const [open, setOpen] = useState<boolean>(false)
  const form = useForm<CreateCategorySchemaType>({
    resolver: zodResolver(CreateCategorySchema),
    defaultValues: {
      type,
    }
  })

  const queryClient = useQueryClient();
  const theme = useTheme()

  const { mutate, isPending } = useMutation({
    mutationFn: CreateCategory,
    onSuccess: async (data: Category) => {
      form.reset({
        name: "",
        icon: "",
        type
      })

      sonner.success(`Category ${data.name} created successfully 🎉`, { id: "create-category" })

      successCallback(data)

      await queryClient.invalidateQueries({
        queryKey: ["categories"]
      })

      setOpen((prev) => !prev)
    },
    onError: () => {
      sonner.error("Something went wrong!", { id: "create-category" })
    }
  })

  const onSubmit = useCallback((values: CreateCategorySchemaType) => {
    sonner.loading("Creating category ...", { id: "create-category" })
    mutate(values)
  }, [mutate])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger ? trigger : (
          <Button variant="ghost" className="flex border-separate items-center jsutify-start rounded-none border-b px-3 py-3 text-muted-foreground">
            <PlusSquareIcon className="mr-2 h-4 h-4" />
            Create new
          </Button>
        )}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Create{" "}<span className={cn("m-1", type === "income" ? "text-emerald-500" : "text-red-500")}>{type}</span>category
          </DialogTitle>
          <DialogDescription>Categories are used to group your transaction</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Name
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Category" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is how your category will appear in the app
                  </FormDescription>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="icon"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>
                    Icon
                  </FormLabel>
                  <FormControl>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="h-[100px] w-full">
                          {form.watch("icon") ? (
                            <div className="flex flex-col items-center gap-2">
                              <span className="text-5xl" role="img">{field.value}</span>
                              <p className="text-xs text-muted-foreground">Click to change</p>
                            </div>
                          ) : (
                            <div className="flex flex-col items-center gap-2">
                              <CircleOffIcon className="h-[48px] w-[48px]" />
                              <p className="text-xs text-muted-foreground">Click to select</p>
                            </div>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-full relative -bottom-24">
                        <Picker theme={theme.resolvedTheme} size="0.3em" data={data} exceptEmojis={["flag-il", "rainbow-flag", "bacon"]} onEmojiSelect={((emoji: { native: string }) => { field.onChange(emoji.native) })} />
                      </PopoverContent>
                    </Popover>
                  </FormControl>
                  <FormDescription>
                    This is how your category will appear in the app
                  </FormDescription>
                </FormItem>
              )}
            />
          </form>
        </Form>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary" onClick={() => form.reset()}>Cancel</Button>
          </DialogClose>
          <Button onClick={form.handleSubmit(onSubmit)} disabled={isPending}>
            {!isPending ? "Create" : (
              <SpinnerIcon className="w-5 h-5 animate-spin" />
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog >
  )
}

export default CreateCategoryDialog
