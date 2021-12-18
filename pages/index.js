import { useState, useEffect, useContext } from 'react';
import Router, { useRouter } from "next/router";

export default function Home() {

  const router = useRouter();

  useEffect(() => {
    if(!router.isReady) return;
    router.push(`https://app.mazury.xyz/`)
  }, [router.isReady])

  return (
    <div></div>
  )
}
