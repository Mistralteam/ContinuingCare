// PropertiesClient.tsx
'use client';

import { toast } from "react-hot-toast";
import axios from "axios";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";

import { SafeListing, SafeUser } from "@/app/types";
import Heading from "@/app/components/Heading";
import Container from "@/app/components/Container";
import ListingCard from "@/app/components/listings/ListingCard";

interface PropertiesClientProps {
  listings: SafeListing[],
  currentUser?: SafeUser | null,
}

const PropertiesClient: React.FC<PropertiesClientProps> = ({ listings, currentUser }) => {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState('');

  const onDelete = useCallback((id: string) => {
    setDeletingId(id);
    axios.delete(`/api/listings/${id}`)
      .then(() => {
        toast.success('Listing deleted');
        setDeletingId('');
        // Refresh the page or update the state to remove the deleted listing
        router.refresh();
      })
      .catch((error) => {
        toast.error(error?.response?.data?.error || 'Error deleting listing');
        setDeletingId('');
      });
  }, [router]);

  return ( 
    <Container>
      <Heading title="Properties" subtitle="List of your properties" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8 mt-10">
        {listings.map((listing: SafeListing) => (
          <ListingCard
            key={listing.id}
            data={listing}
            actionId={listing.id}
            onAction={onDelete}
            disabled={deletingId === listing.id}
            actionLabel="Delete Listing"
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
  );
}

export default PropertiesClient;
