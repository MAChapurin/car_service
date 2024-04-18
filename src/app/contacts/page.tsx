import { ContactsPage, Section } from "@/components";
import { contacts } from "@/constants";

export default function Contacts() {
  return (
    <Section title="Контакты">
      <ContactsPage {...contacts} />
    </Section>
  )
}