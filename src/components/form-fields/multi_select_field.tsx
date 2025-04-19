import { useState } from "react";
import { useFormContext, Controller } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "src/components/ui/form";
import { Button } from "src/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "src/components/ui/popover";
import { Command, CommandGroup } from "src/components/ui/command";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "src/lib/utils";
import { ScrollArea } from "src/components/ui/scroll-area";
import { CommandItem } from "src/components/ui/command";

type MultiSelectFieldProps = {
  name: string;
  label: string;
  options: readonly string[];
  description?: string;
};

export function MultiSelectField({
  name,
  label,
  options,
  description,
}: MultiSelectFieldProps) {
  const { control } = useFormContext();
  const [open, setOpen] = useState(false);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <FormField
          name={name}
          render={() => (
            <FormItem className="flex flex-col">
              <FormLabel>{label}</FormLabel>
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="none"
                      size="full"
                      role="combobox"
                      className={cn(
                        "justify-between bg-transparent p-0 text-inherit font-normal",
                        !field.value?.length
                      )}
                    >
                      {Array.isArray(field.value) && field.value.length
                        ? field.value.join(", ")
                        : "Select options"}

                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent
                  className={cn(
                    "w-[300px] p-4",
                    options.length < 10 ? "h-fit" : "h-auto w-[500px]"
                  )}
                >
                  <Command>
                    <ScrollArea className="h-48 p-2">
                      <div className="flex flex-wrap gap-2">
                        {options.map((option) => {
                          const selected = field.value?.includes(option);
                          return (
                            <button
                              key={option}
                              type="button"
                              onClick={() => {
                                const newValue = selected
                                  ? field.value.filter(
                                      (val: string) => val !== option
                                    )
                                  : [...(field.value || []), option];
                                field.onChange(newValue);
                              }}
                              className={cn(
                                "px-3 py-1 text-sm rounded-full border transition",
                                selected
                                  ? "bg-primary text-white border-primary"
                                  : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                              )}
                            >
                              {option}
                            </button>
                          );
                        })}
                      </div>
                    </ScrollArea>
                  </Command>
                </PopoverContent>
              </Popover>
              {description && <FormDescription>{description}</FormDescription>}
              <FormMessage />
            </FormItem>
          )}
        />
      )}
    />
  );
}
