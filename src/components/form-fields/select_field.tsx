import { SelectTrigger } from "@radix-ui/react-select";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "src/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
} from "src/components/ui/select";

export function SelectField({
  name = "",
  label = "",
  options = [],
  placeholder = "Select",
  ...props
}: {
  name: string;
  label: string;
  options: readonly string[];
  placeholder?: string;
  [key: string]: any;
}) {
  return (
    <FormField
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Select
              onValueChange={field.onChange}
              value={field.value}
              {...props}
            >
              <SelectTrigger className="flex justify-start focus:border-none w-fit">
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent>
                {options.map((option: any) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
