import React from "react";
import Pool from "../components/UI/Pool";
import Pagination from "./UI/Pagination";

function HomepagePools() {
  return (
    <div className="w-3/4 mx-auto mt-40 pb-8">
      <div className="grid grid-cols-1 gap-4 gap-y-24 md:grid-cols-3">
        <Pool
          image={"/1.jfif"}
          altImageText={"test"}
          tag={"HOT"}
          tagColor={"primaryOrange-light"}
          headerText={"2 seats"}
          title={
            "New Pool bro from abc to opao[psaspodipasidpasidpaosidpaispdiaspodiapsoidpasdip"
          }
          mapLink={"https://test.com"}
          address={"ABC Roads"}
          timein={"8:00 A.M."}
          timeout={"6:00 P.M."}
          poolId={"465768"}
        />

        <Pool
          image={"/car_1.webp"}
          altImageText={"test"}
          tag={"HOT"}
          tagColor={"primaryRed-light"}
          headerText={"2 seats"}
          title={"New Pool bro"}
          mapLink={"https://test.com"}
          address={"ABC Roads"}
          timein={"8:00 A.M."}
          timeout={"6:00 P.M."}
          poolId={"465768"}
        />
        <Pool
          image={"/car_1.webp"}
          altImageText={"test"}
          tag={"New"}
          tagColor={"primaryBlue-light"}
          headerText={"2 seats"}
          title={"New Pool bro"}
          mapLink={"https://test.com"}
          address={"ABC Roads"}
          timein={"8:00 A.M."}
          timeout={"6:00 P.M."}
          poolId={"465768"}
        />
        <Pool
          image={"/car_1.webp"}
          altImageText={"test"}
          tag={"HOT"}
          tagColor={"primaryOrange-light"}
          headerText={"2 seats"}
          title={"New Pool bro"}
          mapLink={"https://test.com"}
          address={"ABC Roads"}
          timein={"8:00 A.M."}
          timeout={"6:00 P.M."}
          poolId={"465768"}
        />
        <Pool
          image={"/car_1.webp"}
          altImageText={"test"}
          tag={"HOT"}
          tagColor={"primaryOrange-light"}
          headerText={"2 seats"}
          title={"New Pool bro"}
          mapLink={"https://test.com"}
          address={"ABC Roads"}
          timein={"8:00 A.M."}
          timeout={"6:00 P.M."}
          poolId={"465768"}
        />
        <Pool
          image={"/car_1.webp"}
          altImageText={"test"}
          tag={"HOT"}
          tagColor={"primaryRed-light"}
          headerText={"2 seats"}
          title={"New Pool bro"}
          mapLink={"https://test.com"}
          address={"ABC Roads"}
          timein={"8:00 A.M."}
          timeout={"6:00 P.M."}
          poolId={"465768"}
        />
        <Pagination />
      </div>
    </div>
  );
}

export default HomepagePools;
