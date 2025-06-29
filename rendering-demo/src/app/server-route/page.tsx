import ImageSlider from "@/components/imageSlider";
import { serverSideLogic } from "@/utils/server-util";

export default function ServerRoutePage() {
  const result = serverSideLogic();
  return (
    <>
      <h1>Server route {result}</h1>
      <ImageSlider />
    </>
  );
}
