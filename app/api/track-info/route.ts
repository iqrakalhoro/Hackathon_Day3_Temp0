import shipEngine from "@/sanity/lib/shipEngine";
import { NextRequest } from "next/server";

export async function POST(request:NextRequest){
  const body = await request.json();
        console.log ("body", body);
    const shipData = await shipEngine.getRatesWithShipmentDetails({
            rateOptions: {
              carrierIds: [process.env.COURIER_ID as string],
            },
            shipment: {
              shipTo: {
                name: "Amanda Miller",
                phone: "+33 6 12 34 56 78",
                addressLine1: "10 Rue de Rivoli",
                cityLocality: "Paris",
                stateProvince: "Île-de-France",
                postalCode: "75001",
                countryCode: "FR",
                addressResidentialIndicator: "yes"
            },
              shipFrom: {
                companyName: "Example Corp.",
                name: "John Doe",
                phone: "111-111-1111",
                addressLine1: "4009 Marathon Blvd",
                addressLine2: "Suite 300",
                cityLocality: "Austin",
                stateProvince: "TX",
                postalCode: "78756",
                countryCode: "US",
                addressResidentialIndicator: "no",
              },
              packages: [
                {
                  weight: {
                    value: 1.0,
                    unit: "ounce",
                  },
                },
              ],
            },
          });
        console.log("Shipdata", shipData);

        const rateId = shipData.rateResponse.rates?.[0]?.rateId;
        if (!rateId){
          throw new Error("Rate Id is not found")
        }

       const labelDetails = await shipEngine.createLabelFromRate({
          rateId : rateId as string
        });
        console.log("Label Details" , labelDetails.labelId)

        const labelId = labelDetails.labelId

        if (!labelId){
          throw new Error("Label id not found")
        };

        const trackingInfo = await shipEngine.trackUsingLabelId(labelId)

        console.log("Tracking Info", trackingInfo)

        return Response.json({
          trackingNo: trackingInfo.trackingNumber, labelId: labelId
        })
        

        }
               
        
