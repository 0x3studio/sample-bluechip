import { useEffect, useState } from "react";
import { useContractRead, erc721ABI } from "wagmi";

const RegularsChecker = ({ address }: { address: string }) => {
  const { data } = useContractRead({
    addressOrName: "0x6d0de90cdc47047982238fcf69944555d27ecb25",
    contractInterface: erc721ABI,
    functionName: "balanceOf",
    args: address,
  });

  const [hasRegulars, setHasRegulars] = useState(false);

  useEffect(() => {
    if (data) {
      setHasRegulars(data.toNumber() > 0);
    }
  }, [data]);

  return (
    <div>
      {hasRegulars ? (
        <p>You have a Regulars NFT! Well done!</p>
      ) : (
        <p>You don&apos;t have a Regulars NFT yet :(</p>
      )}
    </div>
  );
};

export default RegularsChecker;
