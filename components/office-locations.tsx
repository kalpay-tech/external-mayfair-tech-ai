import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin } from "lucide-react"

const offices = [
  {
    city: "Dubai",
    country: "UAE",
    address:
      "FOAM0658 Compass Building, Al Shohada Road, AL Hamra Industrial Zone-FZ, Ras Al Khaimah, United Arab Emirates",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.2775634298897!2d55.9445!3d25.7831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef672229b5b4a85%3A0x6b8c0c0c0c0c0c0c!2sRas%20Al%20Khaimah%2C%20UAE!5e0!3m2!1sen!2sus!4v1703123456789!5m2!1sen!2sus",
  },
  {
    city: "Lahore",
    country: "Pakistan",
    address: "Asian Food Industries Limited, 46-49 Industrial Area, Gulberg-lll, Lahore, Pakistan",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.8775634298897!2d74.3587!3d31.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904e0e0e0e0e0%3A0x6b8c0c0c0c0c0c0c!2sGulberg%20III%2C%20Lahore%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1703123456789!5m2!1sen!2sus",
  },
]

export function OfficeLocations() {
  return (
    <div className="space-y-8">
      {offices.map((office, index) => (
        <Card key={index} className="overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div>
              <CardHeader>
                <CardTitle className="text-xl">
                  {office.city}, {office.country}
                </CardTitle>
                <CardDescription>Our {office.city.toLowerCase()} office location</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{office.address}</span>
                </div>
              </CardContent>
            </div>
            <div className="h-64 lg:h-full">
              <iframe
                src={office.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${office.city} office location`}
                className="rounded-r-lg"
              />
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
