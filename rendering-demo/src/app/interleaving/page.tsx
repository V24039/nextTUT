import { ClientComponentOne } from "@/components/client-component-one";
import { ServerComponentOne } from "@/components/server-component-one";

// Server component inside server component and client componen inside client component
// export default function Interleaving() {
//   return (
//     <>
//       <h1>Interleaving</h1>
//       <ServerComponentOne />
//       <ClientComponentOne/>
//     </>
//   );
// }

// Client component inside server component
// export default function Interleaving() {
//   return (
//     <>
//       <h1>Interleaving</h1>
//       <ServerComponentOne />
//     </>
//   );
// }

// server component inside the client component
// export default function Interleaving() {
//   return (
//     <>
//       <h1>Interleaving</h1>
//       <ClientComponentOne />
//     </>
//   );
// }

// the workaround for using server component inside client component is to
// pass server component as a child component for client component
export default function Interleaving() {
  return (
    <>
      <h1>Interleaving</h1>
      <ClientComponentOne>
        <ServerComponentOne/>
      </ClientComponentOne>
    </>
  );
}
