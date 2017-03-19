
var endDate = new Date(2020, 01, 01);

var _ballotName = "Testing Ballot";
var _ballotEndTime = endDate.getTime()
var eth_vote_contract_ethvoteballotContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"_votingOptionIndex","type":"uint256"}],"name":"vote","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_votingOptionName","type":"string"}],"name":"addVotingOption","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"getRegisteredVoterCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"finalizeVotingOptions","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"getBallotName","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_voter","type":"address"}],"name":"giveRightToVote","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"voters","outputs":[{"name":"eligableToVote","type":"bool"},{"name":"voted","type":"bool"},{"name":"votedFor","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_index","type":"uint256"}],"name":"getVotingOptionsVoteCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_index","type":"uint256"}],"name":"getVotingOptionsName","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"getVotingOptionsLength","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"votingOptions","outputs":[{"name":"name","type":"string"},{"name":"voteCount","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[{"name":"_ballotName","type":"string"},{"name":"_ballotEndTime","type":"uint256"}],"payable":false,"type":"constructor"}]);
var eth_vote_contract_ethvoteballot = eth_vote_contract_ethvoteballotContract.new(
   _ballotName,
   _ballotEndTime,
   {
     from: web3.eth.accounts[0],
     data: '0x6060604052341561000c57fe5b604051610d51380380610d51833981016040528080518201919060200180519060200190919050505b804211156100435760006000fd5b33600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600060146101000a81548160ff02191690831515021790555081600190805190602001906100b59291906100cd565b506000600281905550806003819055505b5050610172565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061010e57805160ff191683800117855561013c565b8280016001018555821561013c579182015b8281111561013b578251825591602001919060010190610120565b5b509050610149919061014d565b5090565b61016f91905b8082111561016b576000816000905550600101610153565b5090565b90565b610bd0806101816000396000f300606060405236156100ad576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630121b93f146100af5780631cfe7e5a146100cf5780632b8c250414610129578063469161021461014f5780636bb37f72146101615780639e7b8d61146101fa578063a3ec138d14610230578063c795e78814610290578063d11d30a3146102c4578063dcf7b6281461036b578063dff67f6b14610391575bfe5b34156100b757fe5b6100cd600480803590602001909190505061044e565b005b34156100d757fe5b610127600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190505061059b565b005b341561013157fe5b6101396106ab565b6040518082815260200191505060405180910390f35b341561015757fe5b61015f6106b6565b005b341561016957fe5b610171610742565b60405180806020018281038252838181518152602001915080519060200190808383600083146101c0575b8051825260208311156101c05760208201915060208101905060208303925061019c565b505050905090810190601f1680156101ec5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561020257fe5b61022e600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506107eb565b005b341561023857fe5b610264600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506108b8565b604051808415151515815260200183151515158152602001828152602001935050505060405180910390f35b341561029857fe5b6102ae60048080359060200190919050506108fc565b6040518082815260200191505060405180910390f35b34156102cc57fe5b6102e2600480803590602001909190505061092b565b6040518080602001828103825283818151815260200191508051906020019080838360008314610331575b8051825260208311156103315760208201915060208101905060208303925061030d565b505050905090810190601f16801561035d5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561037357fe5b61037b6109f8565b6040518082815260200191505060405180910390f35b341561039957fe5b6103af6004808035906020019091905050610a06565b604051808060200183815260200182810382528481815460018160011615610100020316600290048152602001915080546001816001161561010002031660029004801561043e5780601f106104135761010080835404028352916020019161043e565b820191906000526020600020905b81548152906001019060200180831161042157829003601f168201915b5050935050505060405180910390f35b60006003544211156104605760006000fd5b60001515600060149054906101000a900460ff16151514156104825760006000fd5b600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209050600015158160000160009054906101000a900460ff16151514156104e75760006000fd5b600115158160000160019054906101000a900460ff161515141561053d5760016004826001015481548110151561051a57fe5b906000526020600020906002020160005b50600101600082825403925050819055505b60018160000160016101000a81548160ff021916908315150217905550818160010181905550600160048381548110151561057457fe5b906000526020600020906002020160005b50600101600082825401925050819055505b5050565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156105f85760006000fd5b6003544211156106085760006000fd5b60011515600060149054906101000a900460ff161515141561062a5760006000fd5b6004805480600101828161063e9190610a39565b916000526020600020906002020160005b604060405190810160405280858152602001600081525090919091506000820151816000019080519060200190610687929190610a6b565b506020820151816001015550505060016002600082825401925050819055505b5b50565b600060025490505b90565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156107135760006000fd5b6003544211156107235760006000fd5b6001600060146101000a81548160ff0219169083151502179055505b5b565b61074a610aeb565b60018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156107e05780601f106107b5576101008083540402835291602001916107e0565b820191906000526020600020905b8154815290600101906020018083116107c357829003601f168201915b505050505090505b90565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156108485760006000fd5b6003544211156108585760006000fd5b6001600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160006101000a81548160ff0219169083151502179055505b5b50565b60056020528060005260406000206000915090508060000160009054906101000a900460ff16908060000160019054906101000a900460ff16908060010154905083565b600060048281548110151561090d57fe5b906000526020600020906002020160005b506001015490505b919050565b610933610aeb565b60048281548110151561094257fe5b906000526020600020906002020160005b506000018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156109eb5780601f106109c0576101008083540402835291602001916109eb565b820191906000526020600020905b8154815290600101906020018083116109ce57829003601f168201915b505050505090505b919050565b600060048054905090505b90565b600481815481101515610a1557fe5b906000526020600020906002020160005b9150905080600001908060010154905082565b815481835581811511610a6657600202816002028360005260206000209182019101610a659190610aff565b5b505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610aac57805160ff1916838001178555610ada565b82800160010185558215610ada579182015b82811115610ad9578251825591602001919060010190610abe565b5b509050610ae79190610b37565b5090565b602060405190810160405280600081525090565b610b3491905b80821115610b30576000600082016000610b1f9190610b5c565b600182016000905550600201610b05565b5090565b90565b610b5991905b80821115610b55576000816000905550600101610b3d565b5090565b90565b50805460018160011615610100020316600290046000825580601f10610b825750610ba1565b601f016020900490600052602060002090810190610ba09190610b37565b5b505600a165627a7a723058205c50d67e906c0b51b9402d6559dc35b102f25fd3bdb38849c2169d20dcf540e60029',
     gas: '4700000'
   }, function (e, contract){
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
 })
