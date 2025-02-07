import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'xew7i717', 
  dataset: 'production',       
  useCdn: false,               
  token: 'skW77ukL1i90o05bnWFXzgVPuS5CnJ3G1gpfhmiWIbsrBekZ8Px9bkUa9uczRlaS2Rkq8w9RtSnsPidjj1iCSgotS0hkPPDOM9ypvYR2Yw7vLKZKdn3r0Q6UzTsVErBTxzQExH3eOTEuvilwJppGyiLo2CeUUyqP2Pu92EjRbJNFwZ09xSeY',  
});


async function deleteAllProducts() {
  try {
    const result = await client.delete({
      query: '*[_type == "product"]', // Delete all documents of type "product"
    });
    console.log('Deleted documents:', result);
  } catch (err) {
    console.error('Error deleting documents:', err);
  }
}

deleteAllProducts();