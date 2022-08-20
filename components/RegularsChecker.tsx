import useNFTChecker from "../hooks/useNFTChecker";

const RegularsChecker = ({ address }: { address: string }) => {
  const { hasNFT: hasRegulars } = useNFTChecker({
    contractAddress: "0x6d0de90cdc47047982238fcf69944555d27ecb25",
    walletAddress: address,
  });

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
