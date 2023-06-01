'use client';
interface Button {
    label: string,
}

export default function Button({label}: Button) {

   return(
   <>
   {label}
   </>
   ) 

}