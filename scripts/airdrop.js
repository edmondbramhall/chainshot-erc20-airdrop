require('dotenv').config();
const ethers = require("ethers");
const { abi } = require("../artifacts/contracts/EdCoin.sol/EdCoin")
async function airdrop(addresses, amount) {
    const contractAddress = process.env.CONTRACT_ADDRESS;
    const provider = ethers.providers.getDefaultProvider(process.env.ALCHEMY_RINKEBY_URL);
    const wallet = new hre.ethers.Wallet(process.env.RINKEBY_PRIVATE_KEY, provider);
    const contract = new hre.ethers.Contract(contractAddress, abi, wallet);
    const numberOfTokens = hre.ethers.utils.parseUnits(amount, 18);
    const options = { gasLimit: 1500000, gasPrice: hre.ethers.utils.parseUnits('1.0', 'gwei') };
    for (const address of addresses) {
        const tx = await contract.transfer(address, numberOfTokens, options);
        console.log(tx);
    }    
}
const addresses = [
    // "0xF1540a82d41dF3F060Ef1e51A9111Ad338cA96D6", // Brian P
    // "0x81810BEE444d1533ca6e2b2403e03615b2A83b6C", // Ed account 2    
    // "0x1BdBcaE2F2F719A53Eb7b7E201A1f0B9fcCD11Ce", // al
    // "0x6499a5363871FD5DC8AceC436E0edCc69417E0B5", // Andrew
    // "0xf9C4c10421db6bc73ba0BF27E5f8Ff2Ac5294b06", //kai
    // "0x4dE6F4e4c2E9c48b2EF24b3374dFBE791F89852a", //alexisw
    // "0x1DC6cC0F69f48c113BB91E13d705978A4D4c7C6B", //Alexander Mardar
    // "0x70E566c8A8dF3cE7a5639D8E7cd044A06c365D7b", // Juan B
    // "0x24876602373858cF6c6f9429e37b8fC04E5c1e20",//mathias
    // "0xD4BD0D3971B998AD0f288932f8e357DCCB99D580",//enrico NEW ONE 
    // "0x4Ac0184CBeFB6971534C2FD7871C3F0FF4F2974d", //David
    // "0x3234B58D547a09b6e4A88Ad6E33e908fe7C0612f", // philip
    // "0x6F234Fa20558743970ccEBD6AF259fCB49eeA73c", // Jordan
    // "0x0C5Dee0a05F44aF1e3e669cE6a317F9336780A98", // alan
    // "0x8A93cc16A3143d8Dd5BC9c2C2455D95f9f0414A0", // cara
    // "0x1b5251158a60AEEbf7736bc070C47c897c41aEde", // dan m
    // "0x49dEE713dA8c060a931DB12f281765E6C9136B51", // ellis
    // "0x89D0f7C9b4919C286Da4C5ED4A503a70165E813B", // Alessandro
    // "0x74304F75F0D9AD5D589Bb759BED2fF8113761372", //cagri
    // "0x7c6372B5698Dc66142Fb54242b9C935Dd1F4d3cA", // Hao
    // "0x8618EF154F18a42d605A0D3FfCCF6D1F383e4E84", // Michael H
    // "0x1eb0bA41cCA2fE899aB238345E811d1F4be30ffb", // Jo
    // "0xf0d9A38494b40b72dcd7A5CA109fd59d80b88337", //
    // "0x97fe1A1f8DB02862c0E0e4f7BF7C190B02803b8E",//Ravi
    // "0xEA4A402D8Aece1E0e2913758c7067976BEa110cf", //Aleksander
    // "0x196d1084455052Af276b481A161aA86d884aaf73",// Adi (Adithya Vivek)
    // "0x7422c488CA71dF4ad18F08600655d035211c4dBB", //Tiger
    // "0x2ddb15C47440A147fD10C2a7cBec6677FdDE8CaB", //Michael|Cambridge
    // "0x96A83D6a7e0E88a741C64C5BE559E7293254115B", //Karadi
    // "0x2767CD05FdC45389aDb55e016358003227CfeBA5", // shane
    // "0x203A9F2E0b65048bEDE4182eAdc4cCA6BA69F3B4", // Rafael C.
    // "0xc7D146aDF51091D6cc79250411c09b79D23aFC30", // Ender
    // "0xD403F0a642046CC5527cfef7965F72135ecd7280", //fara
    // "0x10B2E44F709Ff41d497D8c8B2263CE4ddB59FA7d", //Calvin
    // "0xB0D10B8Cc93bD9E70982A9Add5dB5AeDfd5c61d2", //Cameron M
    // "0x98123314a99b00BF0E7F1a1987b2Ee6ECa6b05Dd", // Deepak
    // "0xC2300Ae62991Fe5D66c7f75531c32fD6cE5eBaA9", // Rajal P.
    // "0x45c7bcd9091AD400aC3FEAf767874ea1cc832344" // Adisa    
    "0xD403F0a642046CC5527cfef7965F72135ecd7280", // fara
    "0x931482f1a7fF0a6748Ac3eC9C0d8d9F5f9260585", //salo s
    "0x3dF9C4BEf799F3Ca035ef725BFFA6D925b7F314b", // michael b
    "0x0D8396E9425Dc8e701b07E7f1d21B7AB54F3bf52", //laurence m
    "0x5aA44Cf795B8468dfE1924Df235E25d4171E6a59", //stipe
    "0xD53c22cEf355ccc0e5F5A9fb1d49E2F3B7283b8A", //Will Comyns
    "0xA669d987c8F893Fd53106a5980cf98bdde80b154", //Djay
    "0xD4CE7BF9548faa57d2bA7ae0e343fAE478960aCb", //German
    "0x9d71E838F6886C70B389aceEB4bd5c47CB569f21", //MrJawnson
    "0xa59Eea48108fA8A1Ae46955DB34Af60cd6e273d7", //Anuar Kilgore
    "0xAeEc1d4f0a349a95A671c530850c994215935245", // sam chepal
    "0xF4DD295ADe887B7487e4354AB7c41213CaAbEd74", // hunter k
    "0x99248BDa760eC313e94e7182c53313CBD2899F6b", //Jasper
    "0x00Bcb8c7c343eB29BA9217123eDa47996cDDf021", // Tom T
    "0x3963C066E010618b7Bb2Aa7c32B88aAd1553EA92", // Jingbo
    "0xf62824e995fD204764f023168cbdc2bD920c4a4E", // Zhuolin Bill
    "0x843451f377DFa03983Fbe1c070e5732ed66bcCf6", // Kisso S
    "0x7Af595C3443a7c893Eb1B67a3aE3905DEb41a4C1", //Raymond 
    "0x8fb6DE8Dd683Cb0B370F0DAFfEd843Bf7355B831", // Rehan S
    "0x495690477f27df52618496D72D1D41e6A9d9b5E5", // Leonard
    "0x4ca5e9214C15b303550B1E6f5e3Eae8033725637", // shreshth
    "0x0933bd68e7788fa2e861C735F0DA787252883dcf", // Esteban
    "0xF1540a82d41dF3F060Ef1e51A9111Ad338cA96D6", // Brian P
    "0xe89b22f42DbD6786e57f979026aac7D8770179d1", // Theo L
    "0xb0537496c8591d14c323c06c77e00f3EBc34F31e", //Pongchaiwat P
    "0xEde91918A5cA1c9ec607006Cb7bb19B531f09Bfd", // bradley
    "0x97fe1A1f8DB02862c0E0e4f7BF7C190B02803b8E", //ravi
    "0x85D106FDA0F3B0EaAb5E2D3F8BC91D08aE410926", // Cameron L
    "0x84Fa62b62b3603cb733A061bbB0765da07BF9Dfc" // Kshitij aka Horizon    
];
airdrop(addresses, "1000");