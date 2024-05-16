"use client"

import { ReactNode } from 'react'
import { Category } from '@prisma/client'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { DeleteCategory } from '../_actions/categories'
import { toast as sonner } from 'sonner'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'
import { TransactionType } from '@/lib/types'

interface Props {
  trigger: ReactNode,
  category: Category
}

const DeleteCategoryDialog = ({ category, trigger }: Props) => {
  const categoryIdentifier = `${category.name}-${category.type}`
  const queryClient = useQueryClient()

  const deleteMutation = useMutation({
    mutationFn: DeleteCategory,
    onSuccess: async () => {
      sonner.success("Category  deleted successfully", { id: categoryIdentifier })

      await queryClient.invalidateQueries({
        queryKey: ["categories"],
      })
    },
    onError: () => {
      sonner.error("Something went wrong!", { id: categoryIdentifier })
    }
  })

  return (
    <AlertDialog>
      <AlertDialogTrigger>{trigger}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>This action cannot be undone. This will permanently delete your category</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => {
            sonner.loading("Deleting category ...", { id: categoryIdentifier })
            deleteMutation.mutate({
              name: category.name,
              type: category.type as TransactionType
            })
          }}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default DeleteCategoryDialog
