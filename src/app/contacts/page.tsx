import { Contacts, Section } from "@/components";
import { contacts } from "@/constants";

export default function ContactsPage() {
  return (
    <Section title="Контакты">
      <Contacts {...contacts}/>
    </Section>
  )
}