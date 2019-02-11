<template>
    <div>
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item" :class="{'disabled': !propsPagiation.has_pre }">
                    <a class="page-link" href="#" aria-label="Previous" @click.prevent="getPage(propsPagiation.current_page - 1)">
                        <span aria-hidden="true">&laquo;</span>
                        <span class="sr-only">Previous</span>
                    </a>
                </li>
                <li class="page-item" v-for="(page) in propsPagiation.total_pages" :key="page"
                    :class="{'active': propsPagiation.current_page === page}">
                    <a class="page-link" href="#" @click.prevent="getPage(page)">{{ page }}</a>
                </li>
                <li class="page-item" :class="{'disabled': !propsPagiation.has_next }">
                    <a class="page-link" href="#" aria-label="Next" @click.prevent="getPage(propsPagiation.current_page + 1)">
                        <span aria-hidden="true">&raquo;</span>
                        <span class="sr-only">Next</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>
<script>
export default {
    name: "Pagination",
    props: ['propsPagiation'],
    methods: {
        getPage(page) {
            console.log(page);
            this.$emit('getPage', page);
        }
    }
}
</script>