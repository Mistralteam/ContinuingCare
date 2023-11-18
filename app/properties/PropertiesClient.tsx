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
// import EditListingModal from "@/app/components/modals/EditListingModal";


interface PropertiesClientProps {
  listings: SafeListing[],
  currentUser?: SafeUser | null,
}

const PropertiesClient: React.FC<PropertiesClientProps> = ({
  listings,
  currentUser
}) => {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState('');
  const [editListing, setEditListing] = useState<SafeListing | null>(null); // State to hold the listing being edited

  const onDelete = useCallback((id: string) => {
    // existing delete logic
  }, [router]);

  const onEdit = useCallback((listing: SafeListing) => {
    // Open the edit modal with the selected listing
    setEditListing(listing);
  }, []);

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
            onEdit={() => onEdit(listing)} // Add an edit button or link
          />
        ))}
      </div>
      {/* {editListing && (
        <EditListingModal
          listing={editListing}
          onClose={() => setEditListing(null)}
        />
      )} */}
    </Container>
  );
}

export default PropertiesClient;
