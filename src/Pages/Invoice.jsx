import { useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import logo from "../assets/JB ICON.png";
import signature from "../assets/signature.png";
import addressIcon from "../assets/Icon/icons8-location-48.png";
import phoneIcon from "../assets/Icon/icons8-phone-48.png";
import facebookIcon from "../assets/Icon/icons8-facebook-48.png";
import paid from "../assets/Payment/Paid.png"
import unpaid from "../assets/Payment/Unpaid.png"


const Invoice = () => {
    const [invoiceData, setInvoiceData] = useState({
        clientName: "",
        clientNumber: "",
        clientAddress: "",
        invoiceNumber: "",
        date: new Date().toISOString().slice(0, 10),
        pnr: "",
        ticketNumber: "",
        paymentMethod: "",
        paymentDate: "",
        products: [
            { product: "", description: "", quantity: 1, unitPrice: 0, total: 0 },
        ],
        total: 0,
    });

    const handleInputChange = (e, field, index) => {
        const value = e.target.value;

        if (["clientName", "clientNumber", "clientAddress", "invoiceNumber", "pnr", "ticketNumber", "paymentMethod", "paymentDate"].includes(field)) {
            setInvoiceData({ ...invoiceData, [field]: value });
        } else if (["product", "description", "quantity", "unitPrice"].includes(field)) {
            const updatedProducts = [...invoiceData.products];
            updatedProducts[index][field] = field === "quantity" || field === "unitPrice" ? parseFloat(value) || 0 : value;
            updatedProducts[index].total = updatedProducts[index].quantity * updatedProducts[index].unitPrice;

            const subtotal = updatedProducts.reduce((sum, product) => sum + product.total, 0);

            setInvoiceData({
                ...invoiceData,
                products: updatedProducts,
                subtotal,
                total: subtotal + 0,
            });

        }
    };
    const deleteProduct = (index) => {
        const updatedProducts = invoiceData.products.filter((_, i) => i !== index);
        const subtotal = updatedProducts.reduce((sum, product) => sum + product.total, 0);

        setInvoiceData({
            ...invoiceData,
            products: updatedProducts,
            subtotal,
            total: subtotal,
        });
    };


    const addProduct = () => {
        setInvoiceData({
            ...invoiceData,
            products: [
                ...invoiceData.products,
                { product: "", description: "", quantity: 1, unitPrice: 0, total: 0 },
            ],
        });
    };

    const handleDownloadPDF = () => {
        const doc = new jsPDF();

        // Company Header
        doc.addImage(logo, "PNG", 20, 20, 25, 25);

        // Company Name
        doc.setFontSize(18);
        doc.setFont("helvetica", "bold");
        doc.text("JATRA BONDHU", 50, 25);

        // Invoice Text (Right Portion)
        doc.setFontSize(22);
        doc.setFont("helvetica", "bold");
        doc.setTextColor(0, 0, 0);
        const invoiceText = "INVOICE";
        const invoiceTextWidth = doc.getTextWidth(invoiceText);
        const rightPosition = doc.internal.pageSize.width - invoiceTextWidth - 30;
        doc.text(invoiceText, rightPosition, 25);

        // Tagline
        doc.setFontSize(12);
        doc.setFont("helvetica", "italic");
        doc.setTextColor(50, 50, 50);
        doc.text("Tours & Travels", 50, 33);



        // Client Information Section
        doc.setFontSize(12);
        doc.setFont("helvetica", "bold");
        doc.setTextColor(30, 144, 255); // Blue color for labels

        // Labels
        doc.text("Invoice To:", 20, 55);
        doc.text("Cell:", 20, 65);
        doc.text("Address:", 20, 75);
        doc.text("Invoice#:", 140, 55);
        doc.text("Date:", 140, 65);

        // Reset font for values
        doc.setFontSize(12);
        doc.setFont("helvetica", "normal");
        doc.setTextColor(0, 0, 0); // Black color for values

        // Values
        doc.setFont("helvetica", "bold");
        doc.text(invoiceData.clientName, 50, 55);
        doc.text(invoiceData.clientNumber, 50, 65);
        doc.text(invoiceData.clientAddress, 50, 75);
        doc.text(invoiceData.invoiceNumber, 165, 55);
        doc.text(invoiceData.date, 165, 65);


        // Product Table
        const tableData = invoiceData.products.map((product) => [
            product.product,
            product.description,
            product.quantity,
            product.unitPrice.toFixed(2),
            product.total.toFixed(2),
        ]);
        // Convert 1.5 inches to millimeters (1 inch = 25.4mm)
        const leftRightGap = 20;
        const availableWidth = doc.internal.pageSize.width - 2 * leftRightGap;

        doc.autoTable({
            startY: 90,
            head: [["Product", "Description", "Quantity", "Unit Price (TK)", "Total (TK)"]],
            body: tableData,
            theme: "grid", // Adds gridlines for a cleaner look
            headStyles: {
                fillColor: [30, 144, 255],
                fontStyle: 'bold',
                textColor: [255, 255, 255],
                halign: 'center',
                valign: 'middle',
            },
            bodyStyles: {
                fontSize: 11,
                textColor: [0, 0, 0],
                halign: 'center',
            },
            alternateRowStyles: {
                fillColor: [240, 248, 255],
            },
            styles: {
                fontSize: 11,
                cellPadding: 3,
            },

            tableWidth: availableWidth,
            margin: { left: leftRightGap, right: leftRightGap },

        });

        // Totals
        const finalY = doc.lastAutoTable.finalY + 10;
        doc.setFont("helvetica", "bold");

        // Increase the font size for the total
        doc.setFontSize(14);

        // Calculate the center position for the text (horizontal center)
        const totalText = `Total: ${invoiceData.total.toFixed(2)} TK`;
        const totalTextWidth = doc.getTextWidth(totalText);
        const centerX = (doc.internal.pageSize.width - totalTextWidth) / 2;

        // Draw the total text centered
        doc.text(totalText, centerX, finalY + 10);

        // Payment Details: Only include if Payment Status is Paid
        if (invoiceData.paymentStatus === "Paid") {
            doc.setFontSize(12);
            doc.setFont("helvetica", "bold");
            doc.text(`PNR: ${invoiceData.pnr}`, 20, finalY + 30);
            doc.setFont("helvetica", "bold");
            doc.text(`Ticket Number: ${invoiceData.ticketNumber}`, 20, finalY + 40);
            doc.text(`Payment Method: ${invoiceData.paymentMethod}`, 20, finalY + 50);
            doc.text(`Payment Date: ${invoiceData.paymentDate}`, 20, finalY + 60);
        }

        // Payment Status
        const paymentStatusY = invoiceData.paymentStatus === "Paid" ? finalY + 80 : finalY + 40;
        doc.setFontSize(12);
        doc.setFont("helvetica", "bold");
        doc.text("Payment Status:", 20, paymentStatusY);

        // Display Paid or Unpaid with an Image
        const paidImage = paid;
        const unpaidImage = unpaid;

        const imageX = 55; 
        const imageSize = 30; 

        if (invoiceData.paymentStatus === "Paid") {
            doc.addImage(paidImage, "PNG", imageX, paymentStatusY - 5, imageSize, imageSize); // Paid image
        } else {
            doc.addImage(unpaidImage, "PNG", imageX, paymentStatusY - 5, imageSize, imageSize); // Unpaid image
        }

        // Signature
        doc.addImage(signature, "PNG", 140, finalY + 40, 50, 15);
        doc.text("Authorized Signature", 150, finalY + 60);

        // Thank You Message
        const thankYouY = finalY + 120; // Dynamically positioned below the signature and payment details
        doc.setFont("helvetica", "bold");
        doc.setFontSize(12);
        doc.setTextColor(0, 0, 0); 
        doc.text(
            "Thank You For Being With Jatra Bondhu",
            doc.internal.pageSize.width / 2,
            thankYouY,
            { align: "center" }
        );

        // Footer
        const footerHeight = 10;
        const footerY = doc.internal.pageSize.height - footerHeight - 10; // Footer's Y position
        const footerX = 15; // Starting X position for the footer
        const footerWidth = doc.internal.pageSize.width - 2 * footerX; // Usable width for the footer

        // Black Footer Background
        doc.setFillColor(0, 0, 0); // Black background
        doc.rect(footerX, footerY, footerWidth, footerHeight, "F");

        // Icon Size and Text Positions
        const iconSize = 4;
        const textY = footerY + 6; // Center the text vertically within the footer

        // Footer Content Texts
        const addressText = "37 New Chashara, Narayanganj";
        const contactText = "+8801317-290009";
        const facebookText = "facebook.com/JatraBondhu";

        // Calculate the widths of each content block (icon + text + gap)
        const addressWidth = doc.getTextWidth(addressText) + iconSize + 5; // Icon size + text width + spacing
        const contactWidth = doc.getTextWidth(contactText) + iconSize + 5;
        const facebookWidth = doc.getTextWidth(facebookText) + iconSize + 5;

        // Calculate total width of all elements combined and center them
        const totalContentWidth = addressWidth + contactWidth + facebookWidth + 20; // Include gaps between sections
        const contentStartX = footerX + (footerWidth - totalContentWidth) / 2; // Start X position for centered content

        // Address
        let iconX = contentStartX + 12; // Start from the calculated center-aligned position
        doc.addImage(addressIcon, "PNG", iconX, footerY + 3, iconSize, iconSize); // Address icon
        doc.setFontSize(9);
        doc.setFont("helvetica", "bold");
        doc.setTextColor(255, 255, 255); // White text
        doc.text(addressText, iconX + iconSize + 3, textY); // Text after icon

        // Contact
        iconX += addressWidth + 3; // Move to the next section with a gap
        doc.addImage(phoneIcon, "PNG", iconX, footerY + 3, iconSize, iconSize); // Phone icon
        doc.text(contactText, iconX + iconSize + 3, textY);

        // Facebook
        iconX += contactWidth + 6; // Move to the next section with a gap
        doc.addImage(facebookIcon, "PNG", iconX, footerY + 3, iconSize, iconSize); // Facebook icon
        doc.text(facebookText, iconX + iconSize + 3, textY);



        // Save PDF
        doc.save(`${invoiceData.clientName}_${invoiceData.invoiceNumber}.pdf`);

    };

    return (
        <div className="p-4 sm:p-8 bg-gray-100 min-h-screen">
            <div className="max-w-5xl mx-auto bg-white p-6 sm:p-10 shadow-lg rounded-md">
                <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">Invoice for Selling Ticket</h1>

                {/* Invoice Number */}
                <div className="mb-4">
                    <label className="block font-medium">Invoice Number:</label>
                    <input
                        type="text"
                        value={invoiceData.invoiceNumber}
                        onChange={(e) => handleInputChange(e, "invoiceNumber")}
                        className="w-full border p-2 rounded"
                    />
                </div>

                {/* Client Information */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="block font-medium">Client Name:</label>
                        <input
                            type="text"
                            value={invoiceData.clientName}
                            onChange={(e) => handleInputChange(e, "clientName")}
                            className="w-full border p-2 rounded"
                        />
                    </div>
                    <div>
                        <label className="block font-medium">Client Number:</label>
                        <input
                            type="text"
                            value={invoiceData.clientNumber}
                            onChange={(e) => handleInputChange(e, "clientNumber")}
                            className="w-full border p-2 rounded"
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block font-medium">Client Address:</label>
                    <input
                        type="text"
                        value={invoiceData.clientAddress}
                        onChange={(e) => handleInputChange(e, "clientAddress")}
                        className="w-full border p-2 rounded"
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    {/* Payment Status */}
                    <div>
                        <label className="block font-medium">Payment Status:</label>
                        <select
                            value={invoiceData.paymentStatus}
                            onChange={(e) => setInvoiceData({ ...invoiceData, paymentStatus: e.target.value })}
                            className="w-full border p-2 rounded"
                        >
                            <option value="Unpaid">Unpaid</option>
                            <option value="Paid">Paid</option>
                        </select>
                    </div>

                    {/* Conditionally Render Payment Details */}
                    {invoiceData.paymentStatus === "Paid" && (
                        <>
                            <div>
                                <label className="block font-medium">PNR:</label>
                                <input
                                    type="text"
                                    value={invoiceData.pnr}
                                    onChange={(e) => handleInputChange(e, "pnr")}
                                    className="w-full border p-2 rounded"
                                />
                            </div>
                            <div>
                                <label className="block font-medium">Ticket Number:</label>
                                <input
                                    type="text"
                                    value={invoiceData.ticketNumber}
                                    onChange={(e) => handleInputChange(e, "ticketNumber")}
                                    className="w-full border p-2 rounded"
                                />
                            </div>
                            <div>
                                <label className="block font-medium">Payment Method:</label>
                                <input
                                    type="text"
                                    value={invoiceData.paymentMethod}
                                    onChange={(e) => handleInputChange(e, "paymentMethod")}
                                    className="w-full border p-2 rounded"
                                />
                            </div>
                            <div>
                                <label className="block font-medium">Payment Date:</label>
                                <input
                                    type="date"
                                    value={invoiceData.paymentDate}
                                    onChange={(e) => handleInputChange(e, "paymentDate")}
                                    className="w-full border p-2 rounded"
                                />
                            </div>
                        </>
                    )}
                </div>


                {/* Products Section */}
                <div className="mb-4">
                    {invoiceData.products.map((product, index) => (
                        <div
                            key={index}
                            className="grid grid-cols-1 sm:grid-cols-6 gap-4 mb-4 items-center"
                        >
                            <input
                                type="text"
                                placeholder="Product"
                                value={product.product}
                                onChange={(e) => handleInputChange(e, "product", index)}
                                className="border p-2 rounded"
                            />
                            <input
                                type="text"
                                placeholder="Description"
                                value={product.description}
                                onChange={(e) => handleInputChange(e, "description", index)}
                                className="border p-2 rounded"
                            />
                            <input
                                type="number"
                                placeholder="Quantity"
                                value={product.quantity}
                                onChange={(e) => handleInputChange(e, "quantity", index)}
                                className="border p-2 rounded"
                            />
                            <input
                                type="number"
                                placeholder="Unit Price"
                                value={product.unitPrice}
                                onChange={(e) => handleInputChange(e, "unitPrice", index)}
                                className="border p-2 rounded"
                            />
                            <input
                                type="text"
                                placeholder="Total"
                                value={product.total.toFixed(2)}
                                readOnly
                                className="border p-2 rounded bg-gray-100"
                            />
                            {/* Delete Button */}
                            <button
                                onClick={() => deleteProduct(index)}
                                className="bg-red-500 text-white px-3 py-2 rounded"
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                    <button
                        onClick={addProduct}
                        className="bg-blue-500 text-white px-4 py-2 rounded w-full sm:w-auto"
                    >
                        Add Product
                    </button>
                </div>


                {/* Download Button */}
                <button
                    onClick={handleDownloadPDF}
                    className="mt-8 bg-green-500 text-white px-6 py-3 rounded w-full sm:w-auto"
                >
                    Download Invoice
                </button>
            </div>
        </div>
    );
};

export default Invoice;
