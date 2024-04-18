import { Galery, Section } from "@/components";

const galeryData: string[] = [
  '/galery/galery-1.jpg',
  '/galery/galery-2.jpg',
  '/galery/galery-3.jpg',
  '/galery/galery-4.jpg',
  '/galery/galery-5.jpg',
  '/galery/galery-6.jpg',
  '/galery/galery-7.jpg',
  '/galery/galery-8.jpg',
  '/galery/galery-9.jpg',
  '/galery/galery-10.jpg',
  '/galery/galery-1.jpg',
  '/galery/galery-2.jpg',
  '/galery/galery-3.jpg',
  '/galery/galery-4.jpg',
  '/galery/galery-5.jpg',
  '/galery/galery-6.jpg',
  '/galery/galery-7.jpg',
  '/galery/galery-8.jpg',
  '/galery/galery-9.jpg',
  '/galery/galery-10.jpg',
  '/galery/galery-1.jpg',
  '/galery/galery-2.jpg',
  '/galery/galery-3.jpg',
  '/galery/galery-4.jpg',
  '/galery/galery-5.jpg',
  '/galery/galery-6.jpg',
  '/galery/galery-7.jpg',
  '/galery/galery-8.jpg',
  '/galery/galery-9.jpg',
  '/galery/galery-10.jpg'
]

export default function GaleryPage() {
  

  const reverseData = [...galeryData].reverse();
  return (
    <Section title="Фотогалерея">
      <Galery list={galeryData} />
    </Section>
  )
}