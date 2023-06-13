import { useRouter } from "next/router";

export default function ReceiptPage() {
  const router = useRouter();
  //send a request to backend server to fetch the piece of data with an id of router.query.receiptid
  return (
    <div>
      <h1>Hobbit Receipt</h1>
    </div>
  );
}