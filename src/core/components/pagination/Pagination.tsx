import React from 'react';

interface PaginationProps {
    currentPage: number;
    totalItems: number;
    itemsPerPage: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalItems,
    itemsPerPage,
    onPageChange,
}) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const prevPage = currentPage > 1 ? currentPage - 1 : null;
    const nextPage = currentPage < totalPages ? currentPage + 1 : null;

    return (
        <div className='flex gap-8 max-sm:gap-6 md:gap-8 lg:gap-10 justify-end mt-4 max-sm:h-10'>
            <div
                role='button'
                className='bg-[#550000] px-4 py-1.5 text-white rounded-2xl cursor-pointer max-sm:text-sm'
                onClick={() => prevPage && onPageChange(prevPage)}
            >
                Prev
            </div>
            <span className='align-middle py-1.5 text-black justify-center max-sm:text-sm'>
                Page <strong>{currentPage}</strong> of {totalPages}
            </span>
            <div
                role='button'
                className='bg-[#550000] px-4 py-1.5 text-white rounded-2xl cursor-pointer max-sm:text-sm '
                onClick={() => nextPage && onPageChange(nextPage)}
            >
                Next
            </div>
        </div>
    );
};

export default Pagination;
