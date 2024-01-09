import { Galery } from "@/components";

import { galeryData } from "@/constants";

export default function GaleryPage() {

  const reverseData = [...galeryData].reverse();
  return (
    <>
    <Galery list={galeryData}/>
    <Galery list={reverseData}/>
    <Galery list={galeryData}/>
    <Galery list={reverseData}/>
    </>
  )
}