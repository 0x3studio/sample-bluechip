import { useEffect, useState } from "react";
import { useContractRead, erc721ABI } from "wagmi";

const useNFTChecker = ({
  contractAddress,
  walletAddress,
}: {
  contractAddress: string;
  walletAddress: string;
}) => {
  const { data, error } = useContractRead({
    addressOrName: contractAddress,
    contractInterface: erc721ABI,
    functionName: "balanceOf",
    args: walletAddress,
  });

  const [hasNFT, setHasNFT] = useState(false);

  useEffect(() => {
    if (data) {
      setHasNFT(data.toNumber() > 0);
    }
  }, [data]);

  return { hasNFT, error };
};

export default useNFTChecker;
