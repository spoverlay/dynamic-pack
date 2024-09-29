/* eslint-disable react/jsx-no-undef */
"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const FormSchema = z.object({
  pack_version: z.string().min(2, {
    message: "Type in the version",
  }),
  game_version: z.string().min(2, {
    message: "Enter the version of the game",
  }),
  modrinth_project_id: z.string().min(2, {
    message: "Enter the Modrinth project ID",
  })
})

export default function InputForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pack_version: "",
      game_version: "",
      modrinth_project_id: "",
    },
  })

  function downloadJSON(data: z.infer<typeof FormSchema>) {
    const jsonData = {
      current: {
        pack_version: data.pack_version
      },
      remote: {
        game_version: data.game_version,
        modrinth_project_id: data.modrinth_project_id,
        type: "modrinth"
      },
      formatVersion: 1
    };

    const json = JSON.stringify(jsonData, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = data.modrinth_project_id + '.json';
    a.click();
    URL.revokeObjectURL(url);
  }

  function onSubmit(data: z.infer<typeof FormSchema>) {
    downloadJSON(data);
  }

  return (
    <>
      <header className="flex items-center justify-center py-4 gap-2">
        <img className="size-8 rounded-md" src="/logo.png" alt="alt" />
        <p className="font-semibold">Dynamic Pack <span className="font-normal"> | Json Generator</span></p>
      </header>
      <div className="min-h-[93dvh] flex justify-center items-center">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 md:w-1/3 space-y-6">
            <FormField
              control={form.control}
              name="pack_version"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center justify-between">
                    <FormLabel>Pack Version</FormLabel>
                    <FormMessage />
                  </div>
                  <FormControl>
                    <Input placeholder="Type in the version" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="game_version"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center justify-between">
                    <FormLabel>Game version</FormLabel>
                    <FormMessage />
                  </div>
                  <FormControl>
                    <Input placeholder="Enter the version of the game" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="modrinth_project_id"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center justify-between">
                    <FormLabel>Modrinth Project ID</FormLabel>
                    <FormMessage />
                    </div>
                  <FormControl>
                    <Input placeholder="Enter the Modrinth project ID" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <Button className="w-full" type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </>
  )
}
