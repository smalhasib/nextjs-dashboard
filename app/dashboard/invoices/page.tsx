import Search from '@/components/search';
import {CreateInvoice} from '@/components/invoices/buttons';
import {lusitana} from '@/libs/fonts';
import {Suspense} from "react";
import {InvoicesTableSkeleton} from "@/components/skeletons";
import InvoicesTable from "@/components/invoices/table";
import {fetchInvoicesPages} from "@/libs/data";
import Pagination from "@/components/invoices/pagination";

export default async function Page({searchParams}: {
    searchParams?: {
        query?: string;
        page?: string;
    }
}) {
    console.log(searchParams);
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;

    const totalPages = await fetchInvoicesPages(query);

    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className={`${lusitana.className} text-2xl`}>Invoices</h1>
            </div>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <Search placeholder="Search invoices..."/>
                <CreateInvoice/>
            </div>
            <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton/>}>
                <InvoicesTable query={query} currentPage={currentPage}/>
            </Suspense>
            <div className="mt-5 flex w-full justify-center">
                <Pagination totalPages={totalPages}/>
            </div>
        </div>
    );
}