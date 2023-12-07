<script>
  import { AccordionItem, Accordion } from 'flowbite-svelte';
  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
  import {page} from '$app/stores'

  const origin = $page.url.origin
</script>

<svelte:head>
  <title>Grably - Search Engine API</title>
  <meta name="title" content="Grably - Just Another Search Engine API">
  <meta name="description" content="A Modern Search Engine API for Anime, Movies/TVShows, Books, Light Novels, Manga, etc.">
  <meta name="robots" content="index, follow">
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta name="language" content="English">


  <meta property="og:site_name" content="Grably">
  <meta property="og:url" content={origin}>
  <meta property="og:description" content="A Modern Search Engine API for Anime, Movies/TVShows, Books, Light Novels, Manga, etc.">
  <meta property="og:type" content=article>
  <meta property="og:image" content="https://scontent.fupg5-1.fna.fbcdn.net/v/t39.30808-6/408010520_7273821615963230_2876646331379403020_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeG3Tpj1bYdcFFxw0sdzBSHo1ugNaQrNxA7W6A1pCs3EDt75S08jXuP02AIS_eqfD_sfc2h85SnuLx6KcLhPZVPy&_nc_ohc=iO12SdIl8TwAX8M50-D&_nc_ht=scontent.fupg5-1.fna&oh=00_AfDW8AseKeJt6xDS_xHc7FHxPqzEWb4jeVRh7bROSZgfOw&oe=65767DAB">

</svelte:head>

<div class="max-w-3xl mx-[auto] border-2 min-h-screen rounded text-center p-4 bg-slate-800">
    <h1 class="text-4xl pb-10">Grably</h1>
    
    <Accordion>
      <AccordionItem>
        <span slot="header">2embed</span>
        <Table striped={true} color='yellow' hoverable={true} class="rounded">
          <TableHead>
            <TableHeadCell>Type</TableHeadCell>
            <TableHeadCell>query</TableHeadCell>
            <TableHeadCell>example</TableHeadCell>
          </TableHead>
          <TableBody class="divide-y">
            <TableBodyRow>
              <TableBodyCell>TV</TableBodyCell>
              <TableBodyCell>{origin}/2embed/movie/<span class="text-xs text-red-500">[tmdb_id]</span></TableBodyCell>
              <TableBodyCell>
                <a href="/2embed/movie/tt0439572" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Click here</a>
              </TableBodyCell>
            </TableBodyRow>
            <TableBodyRow>
              <TableBodyCell>Movie</TableBodyCell>
              <TableBodyCell>{origin}/2embed/tv/<span class="text-xs text-red-500">[tmdb_id]</span>/S<span class="text-xs text-red-500">[number]</span>/E<span class="text-xs text-red-500">[number]</span></TableBodyCell>
              <TableBodyCell>
                <a href="/2embed/tv/1396/S1/E1" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Click here</a>
              </TableBodyCell>
            </TableBodyRow>
          </TableBody>
        </Table>
      </AccordionItem>
    </Accordion>

</div>