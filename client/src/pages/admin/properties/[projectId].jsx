import Head from 'next/head';
import { ProjectDetailView } from '@/components/properties/ProjectDetailView';
import { adminLayout } from '@/components/layout/layouts';

export default function AdminProjectPage() {
  return (
    <>
      <Head>
        <title>Project · EstateHub CRM</title>
      </Head>
      <ProjectDetailView />
    </>
  );
}

AdminProjectPage.getLayout = adminLayout;
