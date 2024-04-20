import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LandContext } from "../../context/LandContext";
import HeaderAdmin from "../../Components/HeaderAdmin";

import { ethers } from "ethers";

const TransferLand = () => {
  const [error, setError] = useState("");
  const [iserror, setIsError] = useState(false);
  const [newOwnerAddress, setNewOwnerAddress] = useState("");
  const [transferAmount, setTransferAmount] = useState("");

  const navigate = useNavigate();

  const {
    currentAccount,
    LandCount,
    connectWallet,
    transactions,
    isLoading,
    addLandToBlockchain,
    handleChange,
    formData,
    checkIfWalletIsConnect,
    transferLandfunc,
  } = useContext(LandContext);

  const handleNewSubmit = async (e) => {
    e.preventDefault();
    console.log("hi");

    let tformData = {
      landId:
        23605435676249247752549801217230229776778712319924822140605527300529037770752n,
      newOwnerAddress,
      transferAmount,
    };
    const tempid = transferLandfunc(tformData);
    console.log(tempid);
  };

  useEffect(() => {
    checkIfWalletIsConnect();
  }, []);

  return (
    <div
      className="h-screen flex flex-col justify-center items-center font object-cover"
      style={{
        backgroundImage: `url(
          "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        )`,
      }}
    >
      <HeaderAdmin />
      <div className="   m-20 p-10  flex flex-row items-center justify-center rounded-xl backdrop-brightness-90 w-1/3">
        <div className=" w-full flex flex-col md:flex-row  ">
          <div className="  w-full order-2 md:order-1">
            <div className="p-4 ">
              <h1 className="text-3xl font-bold mb-8 text-center">
                Transfer Land
              </h1>

              <form className="mb-4" onSubmit={handleNewSubmit}>
                <div className="mb-2">
                  <label
                    htmlFor="newOwnerAddress"
                    className="block mb-2 text-left font-semibold"
                  >
                    Address of the new owner
                  </label>
                  <input
                    type="text"
                    name="newOwnerAddress"
                    id="newOwnerAddress"
                    value={newOwnerAddress}
                    onChange={(e) => setNewOwnerAddress(e.target.value)}
                    placeholder="Enter the newOwnerAddress!"
                    className="w-full p-2 border border-gray-300 rounded-2xl mb-2 text-sm bg-blue-50 opacity-50"
                    required
                  />
                </div>
                <div className="mb-2">
                  <label
                    htmlFor="transferAmount"
                    className="block mb-2 text-left font-semibold"
                  >
                    Add the Amount to Pay
                  </label>
                  <input
                    type="float"
                    name="transferAmount"
                    id="transferAmount"
                    value={transferAmount}
                    onChange={(e) => setTransferAmount(e.target.value)}
                    placeholder="Enter the Area!"
                    className="w-full p-2 border border-gray-300 rounded-2xl mb-2 text-sm bg-blue-50 opacity-50"
                    required
                  />
                </div>
                {iserror ? (
                  <div
                    class="px-1 my-2 text-sm text-red-500 rounded-lg"
                    role="alert"
                  >
                    <span class="font-medium"> {"*" + error} </span>
                  </div>
                ) : (
                  <></>
                )}
                <button
                  type="submit"
                  className="bg-blue-800 text-white p-2 w-full rounded-2xl"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransferLand;
