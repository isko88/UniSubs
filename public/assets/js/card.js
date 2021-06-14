// import { deleteCard } from "redux/actions/cardActions"
var $table = $('#fresh-table')

window.operateEvents = {
  'click .edit': function (e, value, row, index) {
    
    alert('You click edit icon, row: ' + JSON.stringify(row))
    console.log(value, row, index)
  },
  'click .remove': function (e, value, row, index) {
    $table.bootstrapTable('remove', {
      field: 'id',
      values: [row.id]
    })
    // deleteCard(row)
  }
}

// function operateFormatter(value, row, index) {
//   return [
//     '<a rel="tooltip" title="Edit" class="table-action edit" href="javascript:void(0)" title="Edit">',
//       '<i class="fa fa-edit"></i>',
//     '</a>',
//     '<a rel="tooltip" title="Remove"  class="table-action remove" href="javascript:void(0)" title="Remove">',
//       '<i class="fas fa-trash"></i>',
//     '</a>'
//   ].join('')
// }

$(function () {
  $table.bootstrapTable({
    classes: 'table table-hover table-striped',
    toolbar: '.toolbar',

    search: true,
    showRefresh: false,
    showToggle: false,
    showColumns: true,
    pagination: true,
    striped: false,
    sortable: true,
    pageSize: 8,
    pageList: [8, 10, 25, 50, 100],

    formatShowingRows: function (pageFrom, pageTo, totalRows) {
      return ''
    },
    formatRecordsPerPage: function (pageNumber) {
      return pageNumber + ' rows visible'
    }
  })
})