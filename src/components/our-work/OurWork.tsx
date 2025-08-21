import HeroSection from "./HeroSection";
import TabsContent from "./TabsContent";
import { useState } from "react"

const OurWork = () => {
const [activeTab, setActiveTab] = useState<"podcast" | "live performances" | "shows">("podcast");
    
  return (
    <div>
        <HeroSection activeTab = {activeTab}  setActiveTab ={setActiveTab} />
        <TabsContent activeTab={activeTab} />
    </div>
  )
}

export default OurWork