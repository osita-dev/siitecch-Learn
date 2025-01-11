import Footer from "../components/footer";
import Header from "../components/header";
import { useTheme } from "../context/themeContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Support() {
  const { theme } = useTheme();

  const accountDetails = [
    // { bank: "OPAY", accountNumber: "7016361129",accountName: "Christopher Osita" },
    { bank: "PALMPAY", accountNumber: "7016361129",accountName: "Christopher Osita" },
  ];

  const copyToClipboard = (accountNumber) => {
    navigator.clipboard.writeText(accountNumber);
    toast.success("Account number copied to clipboard!");
  };

  return (
    <>
      <Header />
      <section className={`support ${theme}`}>
        <div className="support-head">Help Our Charity Do More</div>
        <div className="support-body">
          <p>Siitecch is a highly efficient education charity.</p>
          <p>
            When you donate to Siitecch, you help people learn new skills and
            provide for their families.
          </p>
          <p>
            You also help us create new resources for you to use to expand your
            own technology skills.
          </p>
        </div>
        <div className="account-details">
          {accountDetails.map((account, index) => (
            <div key={index} className="account-info">
              <p>
                <strong>Bank:</strong> {account.bank}
              </p>
              <p>
                <strong>AccName:</strong> {account.accountName}
              </p>
              <p>
                <strong>AccNumber:</strong> {account.accountNumber}
              </p>
              <button
                className="btn copy-btn"
                onClick={() => copyToClipboard(account.accountNumber)}
              >
                Copy Account Number
              </button>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
