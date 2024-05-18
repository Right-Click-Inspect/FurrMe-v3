import React, { useState, useRef, useEffect } from "react";
import adminPetList from "../assets/AdminPetList";
import "../components/AdminDashboard.css";
import { IoIosSearch } from "react-icons/io";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { IoIosOptions } from "react-icons/io";
import { FaCat, FaDog } from "react-icons/fa6";
import AdminDashboardSidebar from "./AdminDashboardSidebar";

function AdminDashboard() {
    const [isSearchBarFocused, setIsSearchBarFocused] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isStatusDropdownOpen, setIsStatusDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("All Pets");
    const [selectedStatus, setSelectedStatus] = useState("Status");
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 10;

    const dropdownRef = useRef(null);
    const statusDropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleStatusDropdown = () => {
        setIsStatusDropdownOpen(!isStatusDropdownOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsDropdownOpen(false);
        setCurrentPage(1); // Reset currentPage to 1 when a new option is selected
    };

    const handleStatusOptionClick = (status) => {
        setSelectedStatus(status);
        setIsStatusDropdownOpen(false);
        setCurrentPage(1); // Reset currentPage to 1 when a new status option is selected
    };

    const handlePreviousPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) =>
            Math.min(
                prevPage + 1,
                Math.ceil(filteredPetList.length / rowsPerPage)
            )
        );
    };

    const filteredPetList = adminPetList.filter((pet) => {
        const typeMatch =
            selectedOption === "All Pets" ||
            pet.pet_Type === selectedOption.slice(0, -1);
        const statusMatch =
            selectedStatus === "Status" || pet.pet_Status === selectedStatus;
        return typeMatch && statusMatch;
    });

    const startIndex = (currentPage - 1) * rowsPerPage;
    const currentPets = filteredPetList.slice(
        startIndex,
        startIndex + rowsPerPage
    );

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsDropdownOpen(false);
            }

            if (
                statusDropdownRef.current &&
                !statusDropdownRef.current.contains(event.target)
            ) {
                setIsStatusDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const [searchInput, setSearchInput] = useState(""); // Add state for search input

    const handleSearchInputChange = (event) => {
        setSearchInput(event.target.value); // Update search input state
        setCurrentPage(1); // Reset currentPage to 1 when search input changes
    };

    const searchedPets = searchInput
        ? currentPets.filter((pet) =>
              pet.pet_Name.toLowerCase().includes(searchInput.toLowerCase())
          )
        : currentPets;

    return (
        <div className="adminDashboard">
            <div className="sidebarComp">
                <AdminDashboardSidebar />
            </div>
            <div className="mainContent">
                <div className="header">
                    <div
                        className={`searchBar ${
                            isSearchBarFocused ? "highlighted" : ""
                        }`}
                    >
                        <IoIosSearch className="searchIcon" />
                        <input
                            type="text"
                            placeholder="Search pets..."
                            onFocus={() => setIsSearchBarFocused(true)}
                            onBlur={() => setIsSearchBarFocused(false)}
                            value={searchInput} // Bind input value to searchInput state
                            onChange={handleSearchInputChange} // Add onChange event handler
                        />
                    </div>
                    <div className="tableFilters">
                        <div className="category" ref={dropdownRef}>
                            <p className="petCategory" onClick={toggleDropdown}>
                                {selectedOption}{" "}
                                {isDropdownOpen ? (
                                    <MdKeyboardArrowUp />
                                ) : (
                                    <MdKeyboardArrowDown />
                                )}
                            </p>
                            {isDropdownOpen && (
                                <div className="dropdown">
                                    <ul>
                                        <li
                                            onClick={() =>
                                                handleOptionClick("All Pets")
                                            }
                                        >
                                            All Pets
                                        </li>
                                        <li
                                            onClick={() =>
                                                handleOptionClick("Dogs")
                                            }
                                        >
                                            Dogs
                                        </li>
                                        <li
                                            onClick={() =>
                                                handleOptionClick("Cats")
                                            }
                                        >
                                            Cats
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                        <div className="category" ref={statusDropdownRef}>
                            <p
                                className="petCategory"
                                onClick={toggleStatusDropdown}
                            >
                                {selectedStatus}{" "}
                                {isStatusDropdownOpen ? (
                                    <MdKeyboardArrowUp />
                                ) : (
                                    <MdKeyboardArrowDown />
                                )}
                            </p>
                            {isStatusDropdownOpen && (
                                <div className="dropdown">
                                    <ul>
                                        <li
                                            onClick={() =>
                                                handleStatusOptionClick(
                                                    "Status"
                                                )
                                            }
                                        >
                                            Status
                                        </li>
                                        <li
                                            onClick={() =>
                                                handleStatusOptionClick(
                                                    "Available"
                                                )
                                            }
                                        >
                                            Available
                                        </li>
                                        <li
                                            onClick={() =>
                                                handleStatusOptionClick(
                                                    "Adopted"
                                                )
                                            }
                                        >
                                            Adopted
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <h1>Pet Listings</h1>
                <div className="tableContainer">
                    <table>
                        <thead>
                            <tr>
                                <th>Type</th>
                                <th>Name</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {searchedPets.length === 0 ? ( // Check if no results found
                                <tr>
                                    <td colSpan="3">No Pet Listing Found</td>
                                </tr>
                            ) : (
                                searchedPets.map((pet) => (
                                    <tr key={pet.pet_ID}>
                                        <td>
                                            {pet.pet_Type === "Dog" && (
                                                <>
                                                    <FaDog className="icon" />{" "}
                                                    Dog
                                                </>
                                            )}
                                            {pet.pet_Type === "Cat" && (
                                                <>
                                                    <FaCat className="icon" />{" "}
                                                    Cat
                                                </>
                                            )}
                                        </td>
                                        <td>{pet.pet_Name}</td>
                                        <td>{pet.pet_Status}</td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
                <div className="tableNav">
                    <div className="pageNav" onClick={handlePreviousPage}>
                        <FaAngleLeft className="navIcon" />
                        <p>Previous</p>
                    </div>
                    <p className="pageNum">
                        Page {currentPage} of{" "}
                        {Math.ceil(filteredPetList.length / rowsPerPage)}
                    </p>
                    <div className="pageNav" onClick={handleNextPage}>
                        <p>Next</p>
                        <FaAngleRight className="navIcon" />
                    </div>
                </div>
                <div className="buttonContainer">
                    <button>Add New Pet Listing</button>
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;
