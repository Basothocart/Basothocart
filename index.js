
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-yellow-200 to-yellow-400 p-8 text-center">
        <img src="/basothocart-logo.png" alt="BasothoCart Logo" className="mx-auto h-24 mb-4" />
        <h1 className="text-4xl font-bold mb-2">Welcome to BasothoCart</h1>
        <p className="text-lg">Your trusted local online marketplace for Automotive, Electronics & Apparel</p>
        <Button className="mt-4 bg-black text-white px-6 py-2 rounded-full">Shop Now</Button>
      </div>

      {/* Categories Section */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { title: "Automotive Products", image: "/auto.jpg" },
          { title: "Electronic Products", image: "/electronics.jpg" },
          { title: "Apparel", image: "/apparel.jpg" },
        ].map((cat) => (
          <Card key={cat.title} className="hover:shadow-xl transition">
            <img src={cat.image} alt={cat.title} className="w-full h-40 object-cover rounded-t-xl" />
            <CardContent>
              <h3 className="text-xl font-semibold mt-2">{cat.title}</h3>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Call to Action Section */}
      <div className="bg-yellow-100 p-8 text-center mt-6">
        <h2 className="text-2xl font-bold mb-2">Sell with BasothoCart</h2>
        <p className="mb-4">Reach customers across Lesotho. Join our seller network today.</p>
        <Button className="bg-green-600 text-white px-6 py-2 rounded-full">Become a Seller</Button>
      </div>
    </div>
  );
}
