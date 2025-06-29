"use client";
import { useState } from "react";
import { ClientComponentTwo } from "./client-component-two";
import { ServerComponentOne } from "./server-component-one";

// Client component inside client component
// export const ClientComponentOne = () => {
//   const [name, setName] = useState("Batman");

//   return (
//     <>
//       <h1>Client component one</h1>
//       <ClientComponentTwo />
//     </>
//   );
// };

// server comoponent inside the client component
// gives error for fs imported in server component
// bcoz client components render after server components we cannot import server component inside a client component
// when a sever component is nested client component it is automatically converted to client component, as fs is not client module the error is thrown
// export const ClientComponentOne = () => {
//   const [name, setName] = useState("Batman");

//   return (
//     <>
//       <h1>Client component one</h1>
//       <ServerComponentOne />
//     </>
//   );
// };

export const ClientComponentOne = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [name, setName] = useState("Batman");

  return (
    <>
      <h1>Client component one</h1>
      {children}
    </>
  );
};
