const wrap = document.querySelector('.content')
let items = document.querySelectorAll('.content .item')
const createDivs = (arr) => 
{
    const len = arr.length
    for (let i = 0; i < len; i++) 
    {
        const style = 
        {
            text: arr[i],
            height: arr[i] + 'px',
            left: i*40 + 'px'
        }
        updateItems(items[i], style)
    }
}

const updateItems = (item, style) => 
{
    const { height, left, text } = style
    item.style.height = height
    item.style.left = left
    item.innerHTML = text
}

const handleSpeed = () => 
{
    $('.input-speed').addEventListener('change', 
    function(event) 
    {
        const value = event.target.value
        const speed = (100-value) * 10
        window.fps = speed
    })
}

const sortRun = (arr) => 
{
    let flag = true

    const btnBubbleSort = $('.button-bubble-sort')
    btnBubbleSort.addEventListener('click', function()
    {
        if(flag)
        {
            btnBubbleSort.classList.add('active')
            BubbleSort(arr, function() 
            {
                btnBubbleSort.classList.remove('active')
                flag = true
            })
            flag = false
        }
    })

    const btnInsertSort = $('.button-insert-sort')
    btnInsertSort.addEventListener('click', function()
    {
        if(flag)
        {
            btnInsertSort.classList.add('active')
            InsertSort(arr, function() 
            {
                btnInsertSort.classList.remove('active')
                flag = true
            })
            flag = false
        }
    })

    const btnBInsertSort = $('.button-binsert-sort')
    btnBInsertSort.addEventListener('click', function()
    {
        if(flag)
        {
            btnBInsertSort.classList.add('active')
            BInsertSort(arr, function() 
            {
                btnBInsertSort.classList.remove('active')
                flag = true
            })
            flag = false
        }
    })

    const btnShellSort = $('.button-shell-sort')
    btnShellSort.addEventListener('click', function()
    {
        if(flag)
        {   
            btnShellSort.classList.add('active')
            ShellSort(arr, function() 
            {
                btnShellSort.classList.remove('active')
                flag = true
            })
            flag = false
        }
    })

    const btnQuickSort = $('.button-quick-sort')
    btnQuickSort.addEventListener('click', function()
    {
        if(flag)
        {   
            btnQuickSort.classList.add('active')
            QuickSort(arr, function() 
            {
                btnQuickSort.classList.remove('active')
                flag = true
            })
            flag = false
        }
    })

    const btnSelectionSort = $('.button-selection-sort')
    btnSelectionSort.addEventListener('click', function()
    {
        if(flag)
        {   
            btnSelectionSort.classList.add('active')
            SelectionSort(arr, function() 
            {
                btnSelectionSort.classList.remove('active')
                flag = true
            })
            flag = false
        }
    })
}

const __main = async () => 
{
    const arr = randomArr(50, 400, 15)
    window.fps = 1000
    createDivs(arr)
    handleSpeed()
    sortRun(arr)
}

__main()

