import useNFTChecker from "../hooks/useNFTChecker";

const JellyBotsChecker = ({ address }: { address: string }) => {
  const { hasNFT: hasJellyBot } = useNFTChecker({
    contractAddress: "0x8EFC99918af856699b53DB659533396822f52941",
    walletAddress: address,
  });

  return (
    <div>
      {hasJellyBot ? (
        <p>You own a JellyBot! Well done!</p>
      ) : (
        <p>You don&apos;t own a JellyBot yet :(</p>
      )}
    </div>
  );
};

export default JellyBotsChecker;
