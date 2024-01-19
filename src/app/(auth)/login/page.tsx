"use client"
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormSchema } from '@/lib/types'
import { Form, FormControl, FormDescription, FormField, FormItem, FormMessage } from '@/components/ui/form'
import Link from 'next/link'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Loader from '@/components/Loader'
import { actionLoginUser } from '@/lib/sever-actions/auth-actions'

const LoginPage = () => {
  const router = useRouter()
  const [submitError, setSubmitError] = useState('')

  const form = useForm<z.infer<typeof FormSchema>>({
    mode: 'onChange',
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const isLoading = form.formState.isSubmitting
  const onSubmit: SubmitHandler<z.infer<typeof FormSchema>> = async (formData) => {
    const { error } = await actionLoginUser(formData)
    if (error) {
      form.reset()
      setSubmitError(error.message)
    }
    router.replace('/dashboard')
  }

  return (
    <><Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}
        className='w-full sm:justify-center sm:w-[400px] space-y-6 flex flex-col'
        onChange={() => submitError && setSubmitError('')}

      >
        <Link href='/' className='w-full flex justify-start items-center'>
          <Image src='/cypresslogo.svg' alt='Cypress Logo' width={50} height={50} />
          <span className='font-semibold ml-2 text-4xl dark:text-white'>cypress.</span>
        </Link>
        <FormDescription className='text-foreground/60'>
          An all-In-One Collaboration and Productivity Platform
        </FormDescription>
        <FormField disabled={isLoading} control={form.control} name='email' render={(field) => (
          <FormItem>
            <FormControl>
              <Input
                type='email'
                placeholder='Email'
                {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )} />
        <FormField disabled={isLoading} control={form.control} name='password' render={(field) => (
          <FormItem>
            <FormControl>
              <Input
                type='password'
                placeholder='Password'
                {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )} />
        {submitError && <FormMessage>{submitError}</FormMessage>}
        <Button type='submit' disabled={isLoading} size='lg' className='w-full p-6'>
          {!isLoading ? 'Login' : <Loader />}
        </Button>
        <span className='self-center'>
          Dont have an account?
          <Link href='signup' className='text-primary'>
            {' '}Sign up
          </Link>
        </span>
      </form>
    </Form>

    </>
  )
}

export default LoginPage