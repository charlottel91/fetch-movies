import React from 'react';
import './FetchMovies.css'

class FetchMovies extends React.Component{
    state={
        movie: '',
        poster: '',
        comment: '',
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value, 
        })
    }

    submitForm = e => {
        const url ='https://post-a-form.herokuapp.com/api/movies/'
        const config = {
            method:'POST',
            headers: {
                'content-Type': 'application/JSON',
            },
            body: JSON.stringjify(this.state)
        }

        e.preventDefault()

        fetch(url, config)
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    alert(res.error)
                } else {
                    alert(`${this.state.movie} a été ajouté avec succès!`)
                }
            }).catch(e => {
                console.error(e);
                alert("Erreur lors de l'ajout du film")
            })
    }


    render(){
        return(
            <div className="FormMovies">
                <h1>Saisi d'un film</h1>

                <form onSubmit={this.submitForm}>
                    <fieldset>
                    <legend>Informations</legend>
                    <div className="form-data">
                        <label htmlFor="movie">Film</label>
                        <input
                        type="text"
                        id="movie"
                        name="movie"
                        onChange={this.onChange}
                        value={this.state.movie}
                        />
                    </div>

                    <div className="form-data">
                        <label htmlFor="poster">Poster</label>
                        <input
                        type="text"
                        id="poster"
                        name="poster"
                        onChange={this.onChange}
                        value={this.state.poster}
                        />
                    </div>

                    <div className="form-data">
                        <label htmlFor="comment">Commentaire</label>
                        <textarea
                        type="text"
                        id="comment"
                        name="comment"
                        onChange={this.onChange}
                        value={this.state.comment}
                        />
                    </div>
                    <hr />
                    <div className="form-data">
                        <input type="submit" value="Envoyer" />
                    </div>
                    </fieldset>
                </form>
            </div>
        )
    }

}


export default FetchMovies