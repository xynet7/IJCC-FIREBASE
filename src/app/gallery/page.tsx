
"use client";

import Image from 'next/image';
import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const galleryImages = [
    { src: "https://i.postimg.cc/V6Qf8G0x/py-Ps-CJjv.jpg", alt: "Gallery image 1", hint: "event" },
    { src: "https://i.postimg.cc/tJ0G9G40/gr-Skk4q-P.jpg", alt: "Gallery image 2", hint: "event" },
    { src: "https://i.postimg.cc/GpdN5s2j/Pp6h-Jr-ZT.jpg", alt: "Gallery image 3", hint: "event" },
    { src: "https://i.postimg.cc/xT3x7VPs/LJd-Sn-Wqf.jpg", alt: "Gallery image 4", hint: "event" },
    { src: "https://i.postimg.cc/3JmNym3S/N29h08-Bb.jpg", alt: "Gallery image 5", hint: "event" },
    { src: "https://i.postimg.cc/9Q2f4m8T/Wh-LYrc7-W.jpg", alt: "Gallery image 6", hint: "event" },
    { src: "https://i.postimg.cc/Y9D9XTYH/b-GB3w7-JW.jpg", alt: "Gallery image 7", hint: "event" },
    { src: "https://i.postimg.cc/9F7pY7Zp/wt7-QZw-Vj.jpg", alt: "Gallery image 8", hint: "event" },
    { src: "https://i.postimg.cc/tTPtTqj4/QHmg-M2-Yb.jpg", alt: "Gallery image 9", hint: "event" },
    { src: "https://i.postimg.cc/x8xLqmrG/SYq8-Sd6b.jpg", alt: "Gallery image 10", hint: "event" },
    { src: "https://i.postimg.cc/nLpGQRnK/MXxd-Km-Kp.jpg", alt: "Gallery image 11", hint: "event" },
    { src