import { useState, useEffect, useContext } from 'react';
import Router, { useRouter } from "next/router";

export default function Home() {

  const router = useRouter();

  useEffect(() => {
    if(!router.isReady) return;
    if(router.query.slug){
        router.push(`https://app.mazury.xyz/people/${router.query.slug}`)
    }
  }, [router.isReady])

  return (
    <div></div>
  )
}
