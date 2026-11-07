import { Document } from "@react-pdf/renderer";
import ProposalCover from "./ProposalCover";
import IntroductionPage from "./IntroductionPage";
import BusinessChallengesPage from "./BusinessChallengesPage";
import CustomerExperiencePage from "./CustomerExperiencePage";
import ShopManagementPage from "./ShopManagementPage";
import PaymentsPage from "./PaymentsPage";
import DeliveryPhasesPage from "./DeliveryPhasesPage";
import PricingPage from "./PricingPage";
import OwnershipPage from "./OwnershipPage";
import NextStepsPage from "./NextStepsPage";

export default function BusinessProposalPDF() {
 return (
 <Document
 title="RazeStore Business Proposal"
 author="RazeStore"
 subject="A complete e-commerce system for your business"
 keywords="RazeStore, e-commerce, Kenya, M-Pesa, business proposal"
 creator="RazeStore"
 producer="RazeStore"
 >
 <ProposalCover />
 <IntroductionPage />
 <BusinessChallengesPage />
 <CustomerExperiencePage />
 <ShopManagementPage />
 <PaymentsPage />
 <DeliveryPhasesPage />
 <PricingPage />
 <OwnershipPage />
 <NextStepsPage />
 </Document>
 );
}