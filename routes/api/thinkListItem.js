const {Router} = require('express')
const ThinkListItem = '../../models/ThinkListItem'

const router = Router()

router.get('/', async (req, res) => {
   try
   {
    const thinkListItem = await ThinkListItem.find()
    
    if(!thinkListItem) throw new Error('No list of Itens')

    const sorted = thinkListItem.sort((a, b) => {
        return new Date(a.date).getTime() - new Date(b.date).getTime()
    })

    res.status(200).json(sorted)
    
   } catch (error) {

    res.status(500).json({message : error.message })
   }
})

router.post('/', async (req, res) => {
    const newthinkListItem = new ThinkListItem(req.body) 
    
    try
    {
        const thinkListItem = await newthinkListItem.save()
       
        if(!thinkListItem) throw new Error('Failed occur when try save')

        res.status(200).json(thinkListItem)

    } catch (error) {

        res.status(500).json({message : error.message })
    }
})

router.put('/:id', async (req, res) =>{
    const {id} = req.params

    try
    {
        const response = await ThinkListItem.findByIdAndUpdate(id, req.body)

        if(!response) throw Error('Something went wrong')
        const updated = {...response.doc, ...req.body}
        res.status(200).json(updated)
    } catch (error) {
        res.status(500).json({message: error.message})  
    }
})

router.delete('/:id', async (req, res) =>{
    
})