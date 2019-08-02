const BubbleSort = async (arr, cb) => 
{
    const len = arr.length
    for (let i = 0; i < len; i++) 
    {
        for (let j = 0; j < len - i - 1; j++) 
        {
            items[j].classList.add('active')
            items[j+1].classList.add('active')
            await sleep(window.fps)
            if (arr[j] > arr[j + 1]) 
            {
                await swap(arr, j, j+1)
            }
            items[j].classList.remove('active')
            items[j+1].classList.remove('active')
        }
        items[len-i-1].classList.add('fix')
    }
    cb()
}

const InsertSort = async (arr, cb) => 
{
    const len = arr.length
    items[0].classList.add('fix')
    for (let i = 1; i < len; i++)
    {
        for (let j = i; j > 0; j--)
        {
            items[j].classList.add('active')
            items[j-1].classList.add('active')
            await sleep(window.fps)
            if(arr[j] < arr[j-1])
            {
                await swap(arr, j, j-1)
                if(j-1 == 0)
                {
                    items[j - 1].classList.add('fix')
                }
            }
            else
            {
                items[j].classList.add('fix')
            }
            items[j].classList.remove('active')
            items[j-1].classList.remove('active')
        }
    }
    cb()
}

const BInsertSort = async (arr, cb) =>
{
    const len = arr.length
    items[0].classList.add('fix')
    for (let i = 1; i < len; i++)
    {
        let low = 0
        let high = i - 1
        while(low <= high)
        {
            mid = parseInt((low + high)/2)
            if(arr[i] < arr[mid])
            {
                high = mid - 1
            }
            else
            {
                low = mid + 1
            }
        }

        for (let j = i; j > low; j--)
        {
            items[j].classList.add('active')
            items[j - 1].classList.add('active')
            await sleep(window.fps)
            await swap(arr, j, j - 1)
            items[j].classList.remove('active')
            items[j - 1].classList.remove('active')
        }
        items[low].classList.add('fix')
    }
    cb()
}

const ShellSort = async (arr, cb) =>
{
    const len = arr.length
    var gap = parseInt(len/2)
    for (gap; gap > 0; gap = parseInt(gap/2)) 
    {
        for (var i = gap; i < len; i++) 
        {
            for (var j = i-gap; j>= 0; j-=gap)
            {
                items[j].classList.add('active')
                items[j + gap].classList.add('active')
                await sleep(window.fps)
                if(arr[j] > arr[j + gap])
                {
                    await swap(arr, j, j + gap)
                }
                items[j].classList.remove('active')
                items[j + gap].classList.remove('active')
                if(gap == 1)
                {
                    items[j].classList.add('fix')
                    items[j + gap].classList.add('fix')
                }
            }
        }
    }
    cb()
}

const Partiton = async (arr, low, high) => 
{
    var pivot = arr[low]
    var l = low
    var h = high

    if(l < high)
    {
        items[low].classList.add('active')
        while(low < high)
        {
            while(low < high)
            {
                items[high].classList.add('active')
                await sleep(window.fps)
                if(arr[high] >= pivot)
                {
                    items[high].classList.remove('active')
                    high--
                }
                else
                {
                    await swap(arr, high, low)
                    items[low].classList.remove('active')
                    break
                }
            }
           
            while(low < high)
            {
                items[low].classList.add('active')
                await sleep(window.fps)
                if(arr[low] <= pivot)
                {
                    items[low].classList.remove('active')
                    low++
                }
                else
                {
                    await swap(arr, high, low)
                    items[high].classList.remove('active')
                    break
                }
            }
        }
    
        items[low].classList.remove('active')
        items[high].classList.remove('active')
        items[low].classList.add('fix')
    
        var pivotloc = low
        Partiton(arr, l, pivotloc - 1)
        Partiton(arr, pivotloc + 1, h)
    }
    else if(l == h)
    {
        items[l].classList.add('fix')
    }
}

const QuickSort = async (arr, cb) =>
{
    const len = arr.length;
    var low = 0
    var high = len - 1

    Partiton(arr, low, high)

    cb()
}

const SelectionSort = async (arr, cb) =>
{
    const len = arr.length
    var min = 0

    for(let i = 0; i < len; i++)
    {
        min = i
        for(j = i + 1; j < len; j++)
        {
            if(arr[min] > arr[j])
            {
                min = j
            }    
        }

        if(min != i)
        {
            items[min].classList.add('active')
            items[i].classList.add('active')
            await sleep(window.fps)
            await swap(arr, min, i)
            items[min].classList.remove('active')
            items[i].classList.remove('active')
            
        }
        items[i].classList.add('fix')
    }

    cb()
}
