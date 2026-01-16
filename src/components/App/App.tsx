import Section from "../Section/Section";
import Container from "../Container/Container";
import Form from "../Form/Form";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import type { Photo } from "../../types/photo";
import { getPhotos } from "../../services/photos";

export default function App() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const handleSubmitForm = async (newQuery: string) => {
    try {
      setIsLoading(true);
      setIsError(false);
      setPhotos([]);

      const data = await getPhotos(newQuery);

      if (data.length === 0) {
        toast.error("Sorry, we don't find any results! Try again!");
        return;
      }
      setPhotos(data);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <Section>
        <Container>
          <Form onSubmit={handleSubmitForm} />
        </Container>
      </Section>
      <Toaster />
    </>
  );
}
