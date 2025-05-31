'use client'
import React from 'react'
import{z} from 'zod'
import { useForm } from 'react-hook-form'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from './ui/select'
import { fi } from 'zod/v4/locales'
import { subjects, voices } from '@/constants'
import { Textarea } from './ui/textarea'


const formSchema = z.object({
  name: z.string().min(1, {message: "Companion is required"}),
  subject: z.string().min(1, {message: "Subject is required"}),
  topic: z.string().min(1, {message: "Topic is required"}),
  voice: z.string().min(1, {message: "Voice is required"}),
  style: z.string().min(1, {message: "Style is required"}),
  duration: z.coerce.number().min(1, {message: "Duration is required"}),
})

const CompanionForm = () => {
     // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
subject: '',
topic: '',
voice: '',
style: '',
duration: 15
    },
  })
 
  // 2. Define a submit handler.
  const onSubmit = (values: z.infer<typeof formSchema>) =>{
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Companion Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter the companion name" {...field} className='input'/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
            <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
      <SelectTrigger className='input'>
        <SelectValue placeholder="Select the subject" />
      </SelectTrigger>
      <SelectContent>
        {subjects.map((subject) => (
          <SelectItem key={subject} value={subject} className='capitalize'>
            {subject}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="topic"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What should the companion help with?</FormLabel>
              <FormControl>
                <Textarea placeholder="Ex. Derivates & Integrals" {...field} className='input'/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="voice"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Voices</FormLabel>
              <FormControl>
                 <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
      <SelectTrigger className="input">
        <SelectValue placeholder="Select the voice" />
      </SelectTrigger>
      <SelectContent>
          <SelectItem value='male'className='capitalize'>
            Male
          </SelectItem>
          <SelectItem value='female'className='capitalize'>
            Female
          </SelectItem>
      </SelectContent>
    </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="style"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Style</FormLabel>
              <FormControl>
                 <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
      <SelectTrigger className="input">
        <SelectValue placeholder="Select the style" />
      </SelectTrigger>
      <SelectContent>
          <SelectItem value='formal'className='capitalize'>
            formal
          </SelectItem>
          <SelectItem value='casual'className='capitalize'>
            casual
          </SelectItem>
      </SelectContent>
    </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="duration"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Estimated session duration in minutes</FormLabel>
              <FormControl>
                <Input type='number' placeholder="15" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className='w-full cursor-pointer'>Build Your Companion</Button>
      </form>
    </Form>
  )
}

export default CompanionForm
